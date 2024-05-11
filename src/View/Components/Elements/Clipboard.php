<?php

namespace njpanderson\Braid\View\Components\Elements;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Collection;
use Illuminate\View\Component;

class Clipboard extends Component {
    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $clip
    ) { }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('braid::components.elements.clipboard');
    }
}