<?php

namespace njpanderson\Braid\Base;

use stdClass;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Str;

use njpanderson\Braid\Contracts\PatternDefinition as Contract;
use njpanderson\Braid\Contracts\PatternContext as PatternContextContract;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;
use njpanderson\Braid\Dictionaries\PatternContext;
use njpanderson\Braid\Dictionaries\ScopedSlot;
use njpanderson\Braid\Services\BraidService;

abstract class Pattern implements Contract
{
    private BraidService $service;

    /**
     * The pattern's ID.
     *
     * @var string
     */
    private string $id = '';

    /**
     * Pattern contexts
     *
     * @var array
     */
    protected $contexts = [];

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

    /**
     * The icon of the pattern.
     *
     * The "outline" group from heroicons should be referenced when defining
     * an icon.
     *
     * @var string
     * @see https://heroicons.com/
     */
    protected string $icon = 'document';

    public function __construct() {
        $this->service = App::make(BraidService::class);

        // Set the pattern's ID
        $this->id = $this->setId();

        // Prepare the context data
        $this->prepareContexts();
    }

    /**
     * Default contextData function in the case that the inheriting Pattern
     * class does not provide one.
     *
     * @param string $context
     * @return array|View
     */
    public function contextData(string $context): PatternContextContract|View
    {
        return new PatternContext();
    }

    /**
     * Get the pattern's label
     *
     * @return string
     */
    public function getLabel(): string
    {
        if (!empty($this->label))
            return $this->label;

        $reflect = new \ReflectionClass($this);

        return Str::ucFirst($reflect->getShortName());
    }

    /**
     * Return the pattern's icon.
     *
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon ?? 'document';
    }

    /**
     * Return the instance ID
     *
     * @return string
     */
    public final function getId(): string
    {
        return $this->id;
    }

    /**
     * Get the component view associated with the pattern.
     *
     * @return stdClass|null
     */
    public final function getView(): stdClass|null
    {
        if (!empty($this->viewName))
            return $this->service->formatView($this->viewName);

        $componentView = $this->service->getComponentView($this->getComponentClass());
        return $componentView ?? null;
    }

    /**
     * Get the related component class name. The component class is used to
     * infer the view, and may be overridden by $this->viewName
     *
     * @return string
     */
    public final function getComponentClass(): string
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

    /**
     * Get the defined context names
     *
     * @return array
     */
    public final function getContexts(): array
    {
        return $this->contexts;
    }

    /**
     * Get the context data.
     *
     * @param string $context
     * @return PatternContextContract|View
     */
    public final function getContextData(string $context): PatternContextContract|View
    {
        $data = $this->contextData($context);

        if ($data instanceof View)
            return $data;

        return $data;
    }

    /**
     * Make a single context object.
     *
     * @param array $attributes
     * @param string|null|null $slot
     * @param array $scopedSlots
     * @return PatternContext
     */
    public final function makeContext(
        array $attributes = [],
        string|null $slot = null,
        array $scopedSlots = []
    ): PatternContext {
        return new PatternContext(
            attributes: $attributes,
            slot: $slot,
            scopedSlots: $scopedSlots
        );
    }

    /**
     * Make a scoped slot.
     *
     * @param string|null|null $slot
     * @param array $attributes
     * @return ScopedSlot
     */
    public final function makeScopedSlot(
        string|null $slot = null,
        array $attributes = []
    ): ScopedSlot {
        return new ScopedSlot(
            slot: $slot,
            attributes: $attributes
        );
    }

    /**
     * Whether the context exists on the instance.
     *
     * @param string $context
     * @return boolean
     */
    public final function hasContext(string $context): bool
    {
        return in_array($context, $this->contexts);
    }

    /**
     * Get the JS pattern map ID.
     *
     * @param string|null $context
     * @return string
     */
    public final function getJsMapId(?string $context = ''): string
    {
        return $this->id . (!empty($context) ? '.' . $context : '');
    }

    /**
     * Set the instance ID
     *
     * @return string
     */
    private function setId(): string
    {
        $id = static::class;
        $id = str_replace($this->service->patternsNamespace, '', $id);
        $id = trim($id, '\\');
        $id = str_replace('\\', ':', $id);
        $id = Str::lower($id);

        return $id;
    }

    /**
     * Prepare the list of contexts.
     *
     * (Mainly ensuring there is always a "default" context.)
     *
     * @return void
     */
    private function prepareContexts()
    {
        if (!in_array('default', $this->contexts))
            array_unshift($this->contexts, 'default');
    }
}