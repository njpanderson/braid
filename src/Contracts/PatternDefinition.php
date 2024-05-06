<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\Contracts\View\View;
use njpanderson\Braid\Contracts\PatternContext;

interface PatternDefinition
{
    public function getContexts(): array;
    public function getContextData(string $context): PatternContext|View;
    public function contextData(string $context): PatternContext|View;
    public function hasContext(string $context): bool;
    public function getLabel(): string;
    public function getView(): \stdClass|null;
}