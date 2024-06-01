<?php

namespace njpanderson\Braid\Services;

use stdClass;
use Illuminate\View\View;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Braid;
use njpanderson\Braid\Contracts\PatternContext;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;
use njpanderson\Braid\Contracts\PatternTool;
use njpanderson\Braid\Contracts\Services\PatternCollector;
use njpanderson\Braid\Exceptions\UnknownPatternClassException;

class BraidService implements PatternCollector
{
    public string $patternsNamespace;

    private array $patternTools = [];

    public function __construct(
        private PatternsRepository $patternsRepo,
        private BraidFileService $files
    ) {
        $this->patternsNamespace = $files->getPatternsNamespace();
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

    /**
     * Return whether the pattern meta repository is enabled.
     *
     * @return boolean
     */
    public function getIsRepositoryEnabled(): bool
    {
        return $this->patternsRepo->getIsEnabled();
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

    public function collectPatterns(
        ?string $root = null,
        ?bool $addModelData = true
    ): Collection {
        return $this->files->collectPatterns($root, $addModelData);
    }

    public function getPatternTools()
    {
        return collect($this->patternTools);
    }

    public function registerPatternTools(PatternTool ...$tools): BraidService
    {
        $this->patternTools = array_merge($this->patternTools, $tools);

        return $this;
    }

    public function getDarkModeJS()
    {
        if (Braid::$darkMode === null)
            return 'auto';

        return Braid::$darkMode ? 'on' : 'off';
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
}