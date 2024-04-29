<?php

namespace njpanderson\Braid\Base;

use Illuminate\Contracts\View\View as View;
use Illuminate\Support\Str;

use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\PatternTool as Contract;

abstract class PatternTool implements Contract
{
    protected $name = '';

    public final function getName(): string
    {
        return $this->name;
    }

    public final function getId(): string
    {
        $reflect = new \ReflectionClass($this);

        return Str::slug($reflect->getShortName(), '-');
    }

    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View {
        throw new \Exception(
            'Pattern tool ' . self::class . ' does not support render()' .
            'Has the method been created?'
        );
    }
}