<?php

namespace njpanderson\Braid\Base;

use stdClass;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\App;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\Support\Str;

use njpanderson\Braid\Contracts\PatternDefinition as Contract;
use njpanderson\Braid\Services\BraidService;

abstract class Pattern implements Contract
{
    private BraidService $service;

    /** @var array */
    protected $contexts = ['default'];

    /**
     * Pattern label as used in the menu.
     *
     * @var string
     */
    protected string $label = '';

    /**
     * Name of the view, overrides view resolution.
     *
     * @var string
     */
    protected string $viewName = '';

    public function __construct(
    ) {
        $this->service = App::make(BraidService::class);
    }

    public final function getComponentClass()
    {
        $class = str_replace(
            $this->service->patternsNamespace,
            '',
            static::class
        );

        return collect(explode('\\', $class))
            ->map(fn($part) => ucFirst($part))
            ->join('\\');
    }

    public function getContexts(): array
    {
        return $this->contexts;
    }

    public final function getContextData(string $context): array|View
    {
        $data = $this->contextData($context);

        if (!isset($data['attributes']))
            $data['attributes'] = [];

        $data['attributes'] = $this->formatAttributes($data['attributes']);

        return $data;
    }

    public function contextData(string $context): array|View
    {
        return [
            'attributes' => []
        ];
    }

    public function formatAttributes(array $attributes)
    {
        return new ComponentAttributeBag($attributes);
    }

    public function hasContext(string $context): bool
    {
        return in_array($context, $this->contexts);
    }

    public function getLabel(): string
    {
        if (!empty($this->label))
            return $this->label;

        $reflect = new \ReflectionClass($this);

        return Str::ucFirst($reflect->getShortName());
    }

    public function getView(): stdClass|null
    {
        if (!empty($this->viewName))
            return $this->service->formatView($this->viewName);

        $componentView = $this->service->getComponentView($this->getComponentClass());
        return $componentView ?? null;
    }
}