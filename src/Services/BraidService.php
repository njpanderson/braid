<?php

namespace njpanderson\Braid\Services;

use Illuminate\View\View;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Str;

use App\Contracts\PatternDefinition;

class BraidService
{
    private string $componentsNamespace;
    private string $patternsNamespace;
    private string $patternsPath;

    public function __construct(
        private Filesystem $files
    ) {
        $this->componentsNamespace = 'App\View';
        $this->patternsNamespace = 'Tests\Patterns';
        $this->patternsPath = $this->getPathFromNamespace($this->patternsNamespace);
    }

    public function getComponentClassFromID(string $routeClass)
    {
        return $this->componentsNamespace . '\\' .
            collect(explode(':', $routeClass))
                ->map(fn($part) => ucFirst($part))
                ->join('\\');
    }

    public function getComponentView(string $componentClass)
    {
        $component = new $componentClass();
        $view = $component->resolveView()->name();

        if (strpos($view, 'livewire.') === 0)
            return (object) [
                'name' => preg_replace('/^livewire\./', '', $view),
                'type' => 'livewire'
            ];

        if (strpos($view, 'components.') === 0)
            return (object) [
                'name' => preg_replace('/^components\./', '', $view),
                'type' => 'component'
            ];

        return (object) [
            'name' => $view,
            'type' => 'template'
        ];
    }

    public function getPatternClass(string $componentClass)
    {
        $classPath = str_replace($this->componentsNamespace . '\\', '', $componentClass);
        $classPath = $this->patternsNamespace . '\\' . $classPath;

        return class_exists($classPath) ? $classPath : null;
    }

    public function getPathFromNamespace(string $namespace)
    {
        return base_path() . '/' . str_replace('\\', '/', $namespace);
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
        return route('patterns.pattern', [
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
                $patternClass = $this->getPatternClass($this->getComponentClassFromID($id));
                $contexts = [];

                if ($patternClass)
                    $contexts = collect((new $patternClass)->getContexts())->map(fn($context) => ([
                        'url' => $this->getRouteFromID($id, $context),
                        'id' => $id . '.' . $context,
                        'default' => ($context === 'default'),
                        'label' => Str::ucfirst($context)
                    ]));

                return [
                    'type' => 'file',
                    'label' => $file->getBasename('.php'),
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
}