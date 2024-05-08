<?php

namespace njpanderson\Braid\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Contracts\View\View;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\ComponentSlot;
use njpanderson\Braid\Contracts\PatternDefinition;
use njpanderson\Braid\Exceptions\UnknownPatternClassException;
use njpanderson\Braid\Services\BraidService;

class BraidController
{
    public function __construct(
        private BraidService $service
    ) { }

    public function index()
    {
        $patternFiles = $this->service->collectPatterns();

        return view('braid::index', [
            'patternFiles' => $patternFiles
        ]);
    }

    public function welcome()
    {
        return view('braid::welcome');
    }

    public function patternTools(
        Request $request,
        PatternDefinition $braidPattern,
        ?string $contextId = '')
    {
        return view('braid::patterntools.index', [
            'pattern' => $braidPattern,
            'contextId' => $contextId
        ]);
    }

    public function pattern(
        Request $request,
        PatternDefinition $braidPattern,
        ?string $contextId = ''
    ) {
        $patternMapId = $braidPattern->getJsMapId($contextId);
        $context = $this->service->getContext($braidPattern, $contextId);

        if ($context instanceof View) {
            // Context is already a view, just return it
            return view('braid::pattern', [
                'view' => $context->render(),
                'pattern' => $braidPattern,
                'patternMapId' => $patternMapId
            ]);
        }

        $componentView = $braidPattern->getView();

        return view('braid::pattern', [
            'pattern' => $braidPattern,
            'patternMapId' => $patternMapId,
            'componentView' => $componentView,
            'context' => $context
        ]);
    }

    public function menu()
    {
        return response()->json(
            $this->service->collectPatterns()
        );
    }
}
