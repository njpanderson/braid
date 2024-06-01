<?php

namespace njpanderson\Braid\Contracts\Services;

use Illuminate\Support\Collection;

interface PatternCollector
{
    public function collectPatterns(
        ?string $root = null,
        ?bool $addModelData = true
    ): Collection;
}