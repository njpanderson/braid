<?php

namespace njpanderson\Braid\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Contracts\View\View;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\ComponentSlot;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Contracts\PatternTool;
use njpanderson\Braid\Exceptions\UnknownPatternClassException;
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
        // TODO: Move this to the tool itself?
        return $braidTool->render($braidPattern, $contextId);
    }
}
