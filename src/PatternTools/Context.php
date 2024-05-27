<?php

namespace njpanderson\Braid\PatternTools;

use Illuminate\Contracts\View\View;

use njpanderson\Braid\Base\PatternTool;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Exceptions\PatternContextViewNotFoundException;

class Context extends PatternTool
{
    protected $name = 'Context';

    public function render(
        PatternDefinition $pattern,
        ?string $contextId = ''
    ): View {
        /** @var \Illuminate\View\View|array */
        $contextData = $pattern->getContextData($contextId);

        if ($contextData instanceof View) {
            $contextViewPath = $contextData->getPath();

            if (!file_exists($contextViewPath))
                throw new PatternContextViewNotFoundException($contextViewPath);

            $contextData = file_get_contents($contextViewPath);
        }

        return view('braid::patterntools.tools.context', [
            'pattern' => $pattern,
            'contextId' => $contextId,
            'context' => $contextData,
            'contextViewPath' => (
                isset($contextViewPath) ?
                str_replace(base_path(), '', $contextViewPath) : ''
            )
        ]);
    }
}