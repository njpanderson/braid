<?php

namespace njpanderson\Braid\Traits;

use Illuminate\Support\Collection;

use Illuminate\View\ComponentAttributeBag;
use njpanderson\Braid\Exceptions\SlotAttributeTypeException;

trait HasAttributes {
    protected array $attributes = [];

    public function getAttributes(): ComponentAttributeBag
    {
        return new ComponentAttributeBag($this->attributes);
    }

    public function setAttributes(
        array $attributes = [],
        $enforceScalars = false
    ) {
        if ($enforceScalars) {
            (new Collection($attributes))->each(function($attr, $name) {
                if (!is_scalar($attr)) {
                    throw new SlotAttributeTypeException(
                        $name,
                        $attr,
                        'string'
                    );
                }
            });
        }

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
