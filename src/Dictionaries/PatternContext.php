<?php

namespace njpanderson\Braid\Dictionaries;

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
        $this->setAttributes($attributes);
        $this->setSlot($slot);
        $this->setScopedSlots($scopedSlots);
    }

    public function hasContextData() {
        return (
            (isset($this->attributes) && !empty($this->attributes)) ||
            (isset($this->slot) && !empty($this->slot)) ||
            (isset($this->scopedSlots) && !empty($this->scopedSlots))
        );
    }
}