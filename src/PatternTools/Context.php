<?php

namespace njpanderson\Braid\PatternTools;

use Illuminate\Contracts\View\View;
use njpanderson\Braid\Base\PatternTool;
use njpanderson\Braid\Contracts\PatternDefinition;

class Context extends PatternTool
{
    protected $name = 'Context';

    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View {
        // TODO: Test this
        sleep(5);
        return view('braid::patterntools.tools.context', [
            'pattern' => $pattern
        ]);
    }
}