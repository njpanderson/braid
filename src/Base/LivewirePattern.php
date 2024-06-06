<?php

namespace njpanderson\Braid\Base;

abstract class LivewirePattern extends Pattern
{
    /**
     * The icon of the pattern.
     *
     * The "outline" group from heroicons should be referenced when defining
     * an icon.
     *
     * @var string
     * @see https://heroicons.com/
     */
    protected string $icon = 'bolt';
}
