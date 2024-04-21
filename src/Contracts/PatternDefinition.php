<?php

namespace njpanderson\Braid\Contracts;

use Illuminate\Contracts\View\View;

/** @var array $contexts */
interface PatternDefinition
{
    public function getContexts(): array;
    public function getContextData(string $context): array|View;
    public function contextData(string $context): array|View;
    public function hasContext(string $context): bool;
    public function getLabel(): string;
    public function getView(): \stdClass|null;
}