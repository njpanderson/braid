<?php

namespace njpanderson\Braid\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ToolButton extends Component {
    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $icon = '',
        public bool $labelHidden = false
    ) { }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('braid::components.toolbutton');
    }
}