<?php

namespace {{ namespace }};

use Illuminate\View\View;
use njpanderson\Braid\Base\LivewirePattern;
use njpanderson\Braid\Contracts\PatternContext;

class {{ class }} extends LivewirePattern {
    /**
     * Pattern contexts
     *
     * @var array
     */
    protected $contexts = [];

    public function contextData(string $context): PatternContext|View
    {
        return $this->makeContext();
    }
}