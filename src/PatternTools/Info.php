<?php

namespace njpanderson\Braid\PatternTools;

use Illuminate\Contracts\View\View;
use njpanderson\Braid\Base\PatternTool;
use njpanderson\Braid\Contracts\PatternDefinition;

class Info extends PatternTool
{
    protected $name = 'Info';

    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View {
        return view('braid::patterntools.tools.info', [
            'pattern' => $pattern,
            'contextId' => $contextId
        ]);
    }
}