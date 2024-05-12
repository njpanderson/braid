<?php

namespace njpanderson\Braid\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class ToolButton extends Component {
    public string $iconClass = '';

    /**
     * Create a new component instance.
     */
    public function __construct(
        public string $icon = '',
        public bool $labelHidden = false,
        public string $toggleState = '',
        string $iconClass = '',
    ) {
        $this->iconClass = 'w-6 h-6' .
            ($iconClass ? ' ' . $iconClass : '');
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('braid::components.toolbutton');
    }
}