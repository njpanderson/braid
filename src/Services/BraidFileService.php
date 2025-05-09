<?php

namespace njpanderson\Braid\Services;

use Illuminate\Support\Str;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

use njpanderson\Braid\Contracts\Services\PatternCollector;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;
use njpanderson\Braid\Exceptions\PatternMissingIdException;

class BraidFileService implements PatternCollector
{
    private string $rootNamespace = 'Tests';

    private string $patternsNamespace;
    private string $patternsPath;

    public function __construct(
        private Filesystem $files,
        private PatternsRepository $patternsRepo
    ) {
        $this->patternsNamespace = $this->rootNamespace . '\\Patterns';
        $this->patternsPath = $this->namespaceToPath($this->patternsNamespace);
    }

    public function collectPatterns(
        ?string $root = null,
        ?bool $addModelData = true
    ): Collection {
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
                            'status' => $item->status,
                            'notes' => !empty($item->notes)
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
                $patternClassName = $this->pathToNamespace($file->getRealPath());

                /** @var \njpanderson\Braid\Contracts\PatternDefinition */
                $patternClass = new $patternClassName();

                $id = $patternClass->getId();

                if (empty($id))
                    throw new PatternMissingIdException($patternClassName);

                if ($patternClass) {
                    $contexts = collect($patternClass->getContexts())
                        ->map(function($label, $contextId) use ($id) {
                            if (is_numeric($contextId)) {
                                // Pattern context implements id/label schema
                                // Use the "label" (i.e. key) as the ID
                                $contextId = Str::lower($label);

                                // Adopt the label from the value
                                $label = Str::ucfirst($label);
                            }

                            // dump('label:' . $label . ', id: ' . $contextId);

                            return [
                                'url' => $this->getRoute($id, $contextId),
                                'frameUrl' => $this->getRoute($id, $contextId, true),
                                'type' => 'context',
                                'contextId' => $contextId,
                                'patternId' => $id,
                                'id' => $id . '.' . $contextId,
                                'default' => ($contextId === 'default'),
                                'label' => $label
                            ];
                        })
                        ->values();
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
        $prefix = $prefix ?? base_path('tests');
        return $prefix . str_replace('\\', '/', Str::replaceFirst($this->rootNamespace, '', $namespace));
    }

    private function pathToNamespace(string $path)
    {
        $path = str_replace(base_path(), '', $path);
        $path = preg_replace('/\.php$/', '', $path);
        $path = trim($path, '/');

        $namespace = Str::of($path)->explode('/')->map(fn($part) => (
            Str::studly($part)
        ))->join('\\');

        return $namespace;
    }
}
