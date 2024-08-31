<?php

namespace njpanderson\Braid\Dictionaries;

use Illuminate\Contracts\View\View;
use njpanderson\Braid\Contracts\ScopedSlot as Contract;
use njpanderson\Braid\Traits\HasAttributes;
use njpanderson\Braid\Traits\HasSlot;

class ScopedSlot implements Contract
{
    use HasAttributes,
        HasSlot;

    public function __construct(
        string|View|null $slot = null,
        array $attributes = []
    ) {
        $this->setAttributes($attributes, true);
        $this->setSlot($slot);
    }
}
