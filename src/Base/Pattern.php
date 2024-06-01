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
    protected string $id = '';

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
    public function getContexts(): array
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
     * Make a single context object.
     *
     * @param array $attributes
     * @param string|null|null $slot
     * @param array $scopedSlots
     * @return PatternContext
     */
    public function makeContext(
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
    public function makeScopedSlot(
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
    public function hasContext(string $context): bool
    {
        return in_array($context, $this->contexts);
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
     * Get the component view associated with the pattern.
     *
     * @return stdClass|null
     */
    public function getView(): stdClass|null
    {
        if (!empty($this->viewName))
            return $this->service->formatView($this->viewName);

        $componentView = $this->service->getComponentView($this->getComponentClass());
        return $componentView ?? null;
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

    /**
     * Set the instance ID
     *
     * @return string
     */
    public function setId(): string
    {
        $id = static::class;
        $id = str_replace($this->service->patternsNamespace, '', $id);
        $id = trim($id, '\\');
        $id = str_replace('\\', ':', $id);
        $id = Str::lower($id);

        return $id;
    }

    /**
     * Return the instance ID
     *
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * Return the instance icon.
     *
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon ?? 'document';
    }

    /**
     * Get the JS pattern map ID.
     *
     * @param string|null $context
     * @return string
     */
    public function getJsMapId(?string $context = ''): string
    {
        return $this->id . (!empty($context) ? '.' . $context : '');
    }
}