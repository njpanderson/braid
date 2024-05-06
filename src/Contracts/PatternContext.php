<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\View\ComponentAttributeBag;

interface PatternContext
{
    public function getAttributes(): ComponentAttributeBag;
    public function getAttributesArray(): array;
    public function getSlot(): string;
    public function getScopedSlots(): array;
}