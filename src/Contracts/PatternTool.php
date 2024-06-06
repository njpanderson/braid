<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\Contracts\View\View;
use njpanderson\Braid\Contracts\PatternDefinition;

interface PatternTool
{
    public function getName(): string;
    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View;
}
