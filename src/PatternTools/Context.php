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
            $contextDataPath = $contextData->getPath();

            if (!file_exists($contextDataPath))
                throw new PatternContextViewNotFoundException($contextDataPath);

            $contextData = file_get_contents($contextDataPath);
        }

        return view('braid::patterntools.tools.context', [
            'pattern' => $pattern,
            'contextId' => $contextId,
            'context' => $contextData,
            'contextPath' => (
                isset($contextDataPath) ?
                str_replace(base_path(), '', $contextDataPath) : ''
            )
        ]);
    }
}