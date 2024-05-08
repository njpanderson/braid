<?php

namespace njpanderson\Braid\Dictionaries;

// use Illuminate\View\Compilers\BladeCompiler;

use njpanderson\Braid\Contracts\ScopedSlot as Contract;
use njpanderson\Braid\Traits\HasAttributes;
use njpanderson\Braid\Traits\HasSlot;

class ScopedSlot implements Contract
{
    use HasAttributes,
        HasSlot;

    public function __construct(
        string|null $slot = null,
        array $attributes = []
    ) {
        // TODO: Investigate if this is needed/useful on attrs
        // BladeCompiler::sanitizeComponentAttribute()
        $this->setAttributes($attributes);
        $this->setSlot($slot);
    }
}