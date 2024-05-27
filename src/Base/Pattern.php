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

    protected string $id = '';

    /** @var array */
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

        $this->id = $this->setId();
        $this->prepareContexts();
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

    public function makeContext(
        array $attributes = [],
        string|null $slot = null,
        array $scopedSlots = []
    ) {
        return new PatternContext(
            attributes: $attributes,
            slot: $slot,
            scopedSlots: $scopedSlots
        );
    }

    public function makeScopedSlot(
        string|null $slot = null,
        array $attributes = []
    ) {
        return new ScopedSlot(
            slot: $slot,
            attributes: $attributes
        );
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

    private function prepareContexts()
    {
        if (!in_array('default', $this->contexts))
            array_unshift($this->contexts, 'default');
    }

    public function setId(): string
    {
        $id = static::class;
        $id = str_replace($this->service->patternsNamespace, '', $id);
        $id = trim($id, '\\');
        $id = str_replace('\\', ':', $id);
        $id = Str::lower($id);

        return $id;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getIcon(): string
    {
        return $this->icon ?? 'document';
    }

    // TODO: This needs to be on the pattern ($id comes from function above!)
    public function getJsMapId(?string $context = ''): string
    {
        return $this->id . (!empty($context) ? '.' . $context : '');
    }
}