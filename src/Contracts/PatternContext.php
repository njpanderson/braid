<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\View\ComponentAttributeBag;

interface PatternContext
{
    public function getAttributes(): ComponentAttributeBag;
    public function getSlot(): string;
    public function getScopedSlots(): array;
}