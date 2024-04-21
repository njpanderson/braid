<?php

namespace njpanderson\Braid\Base;

abstract class BasicPattern extends Pattern
{
    public function formatAttributes(array $attributes)
    {
        return $attributes;
    }
}