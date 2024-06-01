<?php

namespace njpanderson\Braid\Services;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use njpanderson\Braid\Contracts\Services\PatternCollector;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;

class BraidFileService implements PatternCollector
{
    private string $patternsNamespace = 'Tests\\Patterns';

    private string $patternsPath;

    public function __construct(
        private Filesystem $files,
        private PatternsRepository $patternsRepo
    ) {
        $this->patternsPath = $this->namespaceToPath($this->patternsNamespace);
    }

    public function collectPatterns(
        ?string $root = null,
        ?bool $addModelData = true
    ): Collection {
        return Cache::remember(
            'braid-pattern-files',
            5,
            function() use ($root, $addModelData) {
                $root = $root ?? $this->patternsPath;

                if (!$this->files->exists($root))
                    return collect([
                        'level' => 0,
                        'items' => []
                    ]);

                if ($addModelData) {
                    return $this->addModelData(
                        $this->traversePatterns($root)
                    );
                }

                return collect(
                    $this->traversePatterns($root)
                );
            }
        );
    }

    public function getRoute(
        string $id,
        ?string $context = '',
        bool $full = false
    ) {
        $full = ($full ? '.full' : '');

        if ($context) {
            return route('braid.pattern.context' . $full, [
                'braidPattern' => $id,
                'contextId' => $context
            ]);
        }

        return route('braid.pattern' . $full, [
            'braidPattern' => $id
        ]);
    }

    /**
     * Return the current namespace for patterns.
     *
     * @return string
     */
    public function getPatternsNamespace(): string
    {
        return $this->patternsNamespace;
    }

    private function addModelData(array $patterns)
    {
        // Switch to dot notation to avoid nested traversal
        $patterns = Arr::dot($patterns);

        // Collect and inject model data
        collect($patterns)
            ->filter(fn($value, $key) => (
                str_ends_with($key, '.model')
            ))
            ->chunk(10)
            ->each(function($chunk) use (&$patterns) {
                // Get segment of pattern models, if they exist
                $models = $this->patternsRepo
                    ->getByIds(
                        $chunk->values()->all()
                    )->mapWithKeys(fn($item) => (
                        // Map into key/value structure
                        [$item['pattern_id'] => [
                            'status' => $item->status
                        ]]
                    ));

                // Inject model data into original pattern array at the current key
                $chunk->each(function($value, $key) use (&$patterns, $models) {
                    if ($models->has($value)) {
                        $patterns[$key] = $models->get($value);
                    }
                });
            });

        // Filter out remaining empty models and return nested collection
        return collect($patterns)
            ->filter(function($value, $key) {
                return (
                    !str_ends_with($key, '.model') ||
                    is_array($value)
                );
            })
            ->undot();
    }

    private function traversePatterns(
        ?string $root = null,
        int $level = 0
    ) {
        $result = [
            'level' => $level,
            'type' => 'dir',
            'id' => $this->getDirectoryHash($root, $level),
            'path' => $root,
            'label' => $this->files->basename($root),
            'items' => collect(
                $this->files->files($root)
            )->map(function($file) {
                $contexts = [];
                $patternClass = $this->pathToNamespace($file->getRealPath());

                /** @var \njpanderson\Braid\Contracts\PatternDefinition */
                $patternClass = new $patternClass();

                $id = $patternClass->getId();

                if ($patternClass) {
                    $contexts = collect($patternClass->getContexts())->map(fn($context) => ([
                        'url' => $this->getRoute($id, $context),
                        'frameUrl' => $this->getRoute($id, $context, true),
                        'type' => 'context',
                        'contextId' => $context,
                        'patternId' => $id,
                        'id' => $id . '.' . $context,
                        'default' => ($context === 'default'),
                        'label' => Str::ucfirst($context)
                    ]));
                }

                return [
                    'type' => 'file',
                    'label' => $patternClass->getLabel(),
                    'icon' => $patternClass->getIcon(),
                    'path' => $file->getRealPath(),
                    'model' => $id,
                    'id' => $id,
                    'contexts' => $contexts,
                    'url' => $this->getRoute($id),
                    'frameUrl' => $this->getRoute($id, '', true)
                ];
            })->toArray()
        ];

        $result['items'] = array_merge(
            $result['items'],
            collect($this->files->directories($root))->map(
                fn($dir) => $this->traversePatterns($dir, $level + 1)
            )->toArray()
        );

        return $result;
    }

    private function getDirectoryHash(string $path, int $level = 0): string
    {
        return crc32($level . $path);
    }

    private function namespaceToPath(string $namespace, $prefix = null)
    {
        $prefix = $prefix ?? base_path() . '/';
        return $prefix . str_replace('\\', '/', $namespace);
    }

    private function pathToNamespace(string $path)
    {
        $path = str_replace(base_path(), '', $path);
        $path = preg_replace('/\.php$/', '', $path);
        $path = trim($path, '/');
        $path = str_replace('/', '\\', $path);

        return $path;
    }
}