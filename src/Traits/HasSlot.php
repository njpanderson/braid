<?php

namespace njpanderson\Braid\Traits;

trait HasSlot {
    protected string|null $slot = null;

    public function getSlot(): string
    {
        return $this->slot ?? '';
    }

    public function setSlot($slot)
    {
        $this->slot = $slot;
    }

    public function hasSlot(): bool
    {
        return !empty($this->slot);
    }
}
