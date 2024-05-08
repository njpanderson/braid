<?php

namespace njpanderson\Braid\Dictionaries;

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
        $this->setAttributes($attributes, true);
        $this->setSlot($slot);
    }
}