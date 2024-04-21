<?php

namespace njpanderson\Braid\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Contracts\View\View;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\ComponentSlot;

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

    public function pattern(Request $request, $pattern, $context = '')
    {
        $patternClass = $this->service->getPatternClass($pattern);

        if (!$patternClass)
            abort(404);

        // Pattern exists for this component — fetch context data based on query
        /** @var \njpanderson\Braid\Contracts\PatternDefinition */
        $pattern = new $patternClass();

        $context = $this->service->getContext($pattern, $context);

        if ($context instanceof View) {
            // Context is already a view, just return it
            return view('braid::pattern', [
                'pattern' => $context->render()
            ]);
        }

        $componentView = $pattern->getView();

        return view('braid::pattern', [
            'patternClass' => $patternClass,
            'attributes' => $context['attributes'],
            'componentView' => $componentView,
            'slotContent' => $context['slot'] ?? ''
        ]);
    }

    public function menu()
    {
        return response()->json(
            $this->service->collectPatterns()
        );
    }
}
