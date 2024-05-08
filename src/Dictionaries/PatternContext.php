<?php

namespace njpanderson\Braid\Dictionaries;

// use Illuminate\View\Compilers\BladeCompiler;

use njpanderson\Braid\Contracts\PatternContext as Contract;
use njpanderson\Braid\Traits\HasAttributes;
use njpanderson\Braid\Traits\HasSlot;
use njpanderson\Braid\Traits\HasScopedSlots;

class PatternContext implements Contract
{
    use HasAttributes,
        HasSlot,
        HasScopedSlots;

    public function __construct(
        array $attributes = [],
        string|null $slot = null,
        array $scopedSlots = []
    ) {
        // TODO: Investigate if this is needed/useful on attrs
        // BladeCompiler::sanitizeComponentAttribute()
        $this->setAttributes($attributes);
        $this->setSlot($slot);
        $this->setScopedSlots($scopedSlots);
    }
}