<?php

namespace njpanderson\Braid\View\Components\Elements;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Illuminate\View\Component;

class DefinitionList extends Component {
    public Collection $items;
    public string $itemClasses;

    /**
     * Create a new component instance.
     */
    public function __construct(
        array $items = [],
        string $itemClasses = ''
    ) {
        $this->items = collect($items)->filter(fn($item) => (!empty($item['value'])));
        $this->itemClasses = $itemClasses;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('braid::components.elements.definitionlist');
    }
}
