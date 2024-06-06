<?php

namespace njpanderson\Braid\PatternTools;

use Illuminate\Contracts\View\View;

use njpanderson\Braid\Base\PatternTool;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;
use njpanderson\Braid\Dictionaries\PatternStatus;

class Info extends PatternTool
{
    protected $name = 'Info';

    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View {
        // Get pattern meta
        $repo = app()->make(PatternsRepository::class);

        $model = $repo->ifEnabled(fn($repo) => (
            $repo->findByPatternId($pattern->getId())
        ), null);

        return view('braid::patterntools.tools.info', [
            'pattern' => $pattern,
            'model' => $model,
            'status' => (isset($model) ?
                $model->getStatus() : PatternStatus::fromConfig(-1)),
            'contextId' => $contextId
        ]);
    }
}
