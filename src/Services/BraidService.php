<?php

namespace njpanderson\Braid\Services;

use Closure;
use stdClass;
use Illuminate\View\View;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Contracts\PatternContext;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\PatternTool;
use njpanderson\Braid\Exceptions\UnknownPatternClassException;

class BraidService
{
    public string $patternsNamespace;

    private string $patternsPath;

    private ?Closure $authorizeCallback;

    private array $patternTools = [];

    private string $resourcesPath;

    private array|null $themeColors = null;

    public function __construct(
        private Filesystem $files
    ) {
        $this->patternsNamespace = Config::get('braid.patterns_namespace');
        $this->patternsPath = $this->namespaceToPath($this->patternsNamespace);
        $this->resourcesPath = realpath(__DIR__ . '/../../resources');
    }

    public function getPatternClass(string $patternRouteId): string
    {
        $classPath = collect(explode(':', $patternRouteId))
                ->map(fn($part) => ucFirst($part))
                ->join('\\');

        $classPath = $this->patternsNamespace . '\\' . $classPath;

        if (!class_exists($classPath))
            throw new UnknownPatternClassException($classPath);

        return $classPath;
    }

    public function getComponentView(string $componentClass): stdClass
    {
        $view = '';

        if (class_exists($componentClass)) {
            // Component class exists
            /** @var \Illuminate\View\Component */
            $component = new $componentClass();
            $view = $component->resolveView()->name();
        }

        if (!$view) {
            $view = $this->getViewFromComponentName($componentClass);
        }

        return $this->formatView($view);
    }

    /**
     * Format a view result given the view's name
     *
     * @param string $view
     * @return stdClass
     */
    public function formatView(string $view): stdClass
    {
        if (strpos($view, 'livewire.') === 0)
            return (object) [
                'fullName' => $view,
                'name' => preg_replace('/^livewire\./', '', $view),
                'type' => 'livewire'
            ];

        if (strpos($view, 'components.') === 0)
            return (object) [
                'fullName' => $view,
                'name' => preg_replace('/^components\./', '', $view),
                'type' => 'component'
            ];

        return (object) [
            'fullName' => $view,
            'name' => $view,
            'type' => 'template'
        ];
    }

    public function getRoute(
        string $id,
        ?string $context = '',
        string $route = 'braid.pattern'
    ) {
        return route($route, [
            'braidPattern' => $id,
            'contextId' => $context
        ]);
    }

    public function getPatternClassFromRoute(): string
    {
        $route = Route::current();

        if (!$route->hasParameter('braidPattern'))
            return '';

        $pattern = $route->parameter('braidPattern');

        return get_class($pattern);
    }

    public function getContext(
        PatternDefinition $pattern,
        string $context = '',
        ?array $default = []
    ): PatternContext|View {
        if (empty($context))
            $context = 'default';

        if ($pattern->hasContext($context))
            return $pattern->getContextData($context);

        return $default;
    }

    public function getPatternTools()
    {
        return collect($this->patternTools);
    }

    public function registerPatternTool(PatternTool ...$tools): BraidService
    {
        $this->patternTools = array_merge($this->patternTools, $tools);

        return $this;
    }

    public function collectPatterns(
        ?string $root = null,
        int $level = 0
    ) {
        $root = $root ?? $this->patternsPath;

        if (!$this->files->exists($root))
            return [
                'level' => $level,
                'items' => []
            ];

        return Cache::remember('braid-pattern-menu-' . $root, 5, function() use ($root, $level) {
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

                    if ($patternClass)
                        $contexts = collect($patternClass->getContexts())->map(fn($context) => ([
                            'url' => $this->getRoute($id, $context),
                            'contextId' => $context,
                            'patternId' => $id,
                            'id' => $id . '.' . $context,
                            'default' => ($context === 'default'),
                            'label' => Str::ucfirst($context)
                        ]));

                    $patternLabel = $patternClass->getLabel();

                    return [
                        'type' => 'file',
                        'label' => $patternLabel,
                        'icon' => $patternClass->getIcon(),
                        'path' => $file->getRealPath(),
                        'id' => $id,
                        'contexts' => $contexts,
                        'url' => $this->getRoute($id)
                    ];
                })->toArray()
            ];

            $result['items'] = array_merge(
                $result['items'],
                collect($this->files->directories($root))->map(
                    fn($dir) => $this->collectPatterns($dir, $level + 1)
                )->toArray()
            );

            return $result;
        });
    }

    public function authorizeWith(Closure $callback): BraidService
    {
        $this->authorizeCallback = $callback;

        return $this;
    }

    public function authorized()
    {
        if (!isset($this->authorizeCallback))
            return false;

        return call_user_func($this->authorizeCallback);
    }

    public function getPatternsPath()
    {
        return $this->patternsPath;
    }

    public function getResponseSizes()
    {
        if (!config('braid.response_sizes.enabled'))
            return [];

        $sizes = collect();

        // Convert to a numeric indexed array
        foreach(config('braid.response_sizes.sizes') as $label => $size) {
            $sizes->push(['label' => $label, 'size' => $size]);
        }

        // Add ranges for applicable points
        $sizes = $sizes->map(function($size, $index) use ($sizes) {
            return (object) [
                'range' => ($index < count($sizes) - 1 ? [
                    $size['size'] + 1,
                    ($sizes->get($index + 1)['size'] - 1)
                ] : null),
                ...$size
            ];
        });

        return $sizes;
    }

    private function getViewFromComponentName(string $componentClass)
    {
        $view = Str::trim(Str::lower($componentClass), '\\');
        $view = str_replace('\\', '.', $view);

        return $view;
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

    private function getDirectoryHash(string $path, int $level = 0): string
    {
        return crc32($level . $path);
    }
}