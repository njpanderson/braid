<?php

namespace njpanderson\Braid\Http\Controllers;

use Illuminate\Http\Request;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\PatternTool;
use njpanderson\Braid\Services\BraidService;

class PatternToolsController
{
    public function __construct(
        private BraidService $service
    ) { }

    public function list(Request $request)
    {
        $tools = collect();

        foreach ($this->service->getPatternTools() as $tool) {
            $tools->push([
                'id' => $tool->getId(),
                'label' => $tool->getName(),
                'className' => get_class($tool),
                'content' => ''
            ]);
        }

        return response()->json($tools);
    }

    public function tool(
        Request $request,
        PatternTool $braidTool,
        PatternDefinition $braidPattern,
        ?string $contextId = ''
    ) {
        $output = $braidTool->render(
            $braidPattern,
            $contextId,
        );

        if ($request->has('test') && app()->hasDebugModeEnabled()) {
            return view('braid::pattern', [
                'pattern' => $output
            ]);
        }

        return $output;
    }
}
