<?php

namespace njpanderson\Braid\Dictionaries;

use Illuminate\View\ComponentAttributeBag;

use njpanderson\Braid\Contracts\PatternContext as Contract;

class PatternContext implements Contract
{
    public function __construct(
        private array $attributes = [],
        private string|null $slot = null,
        private array $scopedSlots = []
    ) {}

    public function getAttributes(): ComponentAttributeBag
    {
        return new ComponentAttributeBag($this->attributes);
    }

    public function getAttributesArray(): array
    {
        return $this->attributes;
    }

    public function hasAttributes(): bool
    {
        return !empty($this->attributes);
    }

    public function getSlot(): string
    {
        return $this->slot ?? '';
    }

    public function hasSlot(): bool
    {
        return !empty($this->slot);
    }

    public function getScopedSlots(): array
    {
        return $this->scopedSlots;
    }

    public function hasScopedSlots(): bool
    {
        return !empty($this->scopedSlots);
    }
}