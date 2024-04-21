<?php

namespace njpanderson\Braid\Services;

use Closure;
use stdClass;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Str;

use njpanderson\Braid\Contracts\PatternDefinition;

class BraidService
{
    public string $componentsNamespace;
    public string $patternsNamespace;
    private string $templatesPath;
    private string $patternsPath;
    private ?Closure $authorizeCallback;

    public function __construct(
        private Filesystem $files
    ) {
        $this->componentsNamespace = Config::get('braid.components_namespace');
        $this->patternsNamespace = 'Tests\Patterns';
        $this->templatesPath = resource_path('views');
        $this->patternsPath = $this->namespaceToPath($this->patternsNamespace);
    }

    public function getPatternClass(string $patternRouteId)
    {
        $classPath = collect(explode(':', $patternRouteId))
                ->map(fn($part) => ucFirst($part))
                ->join('\\');

        $classPath = $this->patternsNamespace . '\\' . $classPath;

        return class_exists($classPath) ? $classPath : null;
    }

    // public function getComponentClassFromID(string $routeClass)
    // {
    //     return $this->componentsNamespace . '\\' .
    //         collect(explode(':', $routeClass))
    //             ->map(fn($part) => ucFirst($part))
    //             ->join('\\');
    // }

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
            dump('getComponentView', $componentClass);
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

    public function getIDFromPath(string $path)
    {
        $path = str_replace($this->patternsPath, '', $path);
        $path = preg_replace('/\.php$/', '', $path);
        $path = trim($path, '/');
        $path = str_replace('/', ':', $path);
        $id = Str::lower($path);

        return $id;
    }

    public function getRouteFromID(string $id, ?string $context = '')
    {
        return route('braid.pattern', [
            'pattern' => $id,
            'context' => $context
        ]);
    }

    public function getContext(
        PatternDefinition $pattern,
        string $context = '',
        ?array $default = []
    ): array|View {
        if (empty($context))
            $context = 'default';

        if ($pattern->hasContext($context))
            return $pattern->getContextData($context);

        return $default;
    }

    public function collectPatterns(
        ?string $root = null,
        int $level = 0
    ) {
        $root = $root ?? $this->patternsPath;

        $result = [
            'level' => $level,
            'type' => 'dir',
            'path' => $root,
            'label' => $this->files->basename($root),
            'items' => collect(
                $this->files->files($root)
            )->map(function($file) {
                $id = $this->getIDFromPath($file->getRealPath());
                $contexts = [];

                $patternClass = $this->getPatternClass($id);

                /** @var \njpanderson\Braid\Contracts\PatternDefinition */
                $patternClass = new $patternClass();

                if ($patternClass)
                    $contexts = collect($patternClass->getContexts())->map(fn($context) => ([
                        'url' => $this->getRouteFromID($id, $context),
                        'id' => $id . '.' . $context,
                        'default' => ($context === 'default'),
                        'label' => Str::ucfirst($context)
                    ]));

                $patternLabel = $patternClass->getLabel() ?: $file->getBasename('.php');

                return [
                    'type' => 'file',
                    'label' => $patternLabel,
                    'path' => $file->getRealPath(),
                    'id' => $id,
                    'contexts' => $contexts,
                    'url' => $this->getRouteFromID($id)
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
    }

    public function authorizeWith(Closure $callback)
    {
        $this->authorizeCallback = $callback;
    }

    public function authorized()
    {
        if (!isset($this->authorizeCallback))
            return false;

        return call_user_func($this->authorizeCallback);
    }

    private function getViewFromComponentName(string $componentClass)
    {
        dump('getViewFromComponentName');
        dump($this->componentsNamespace);
        dump($componentClass);
        $view = str_replace($this->componentsNamespace, '', $componentClass);
        dump($view);
        $view = Str::trim(Str::lower($view), '\\');
        $view = str_replace('\\', '.', $view);

        return $view;
    }

    private function namespaceToPath(string $namespace, $prefix = null)
    {
        $prefix = $prefix ?? base_path() . '/';
        return $prefix . str_replace('\\', '/', $namespace);
    }
}