<?php

namespace njpanderson\Braid\Traits;

use Illuminate\View\ComponentAttributeBag;

trait HasAttributes {
    protected array $attributes = [];

    public function getAttributes(): ComponentAttributeBag
    {
        return new ComponentAttributeBag($this->attributes);
    }

    public function setAttributes(array $attributes = [])
    {
        $this->attributes = $attributes;
    }

    public function getAttributesArray(): array
    {
        return $this->attributes;
    }

    public function hasAttributes(): bool
    {
        return !empty($this->attributes);
    }
}