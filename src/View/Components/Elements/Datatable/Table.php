<?php

namespace njpanderson\Braid\View\Components\Elements\Datatable;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Table extends Component {
    /**
     * Create a new component instance.
     */
    public function __construct(
        public int $level = 0,
        public array $items = []
    ) { }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('braid::components.elements.datatable.table');
    }
}