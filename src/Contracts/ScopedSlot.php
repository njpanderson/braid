<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\View\ComponentAttributeBag;

interface ScopedSlot
{
    public function getAttributes(): ComponentAttributeBag;
    public function getAttributesArray(): array;
    public function getSlot(): string;
}