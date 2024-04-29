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
            // 'braid' => $this->service,
            'patternFiles' => $patternFiles
        ]);
    }

    public function welcome()
    {
        return view('braid::welcome');
    }

    public function patternTools(
        Request $request,
        string $patternId,
        ?string $contextId = '')
    {
        try {
            $patternClass = $this->service->getPatternClass($patternId);
        } catch (UnknownPatternClassException $error) {
            abort(404, $error->getMessage());
        };

        return view('braid::patterntools.index', [
            // 'braid' => $this->service,
            'pattern' => new $patternClass(),
            'contextId' => $contextId
        ]);
    }

    public function pattern(
        Request $request,
        string $patternId,
        ?string $contextId = ''
    ) {
        try {
            $patternClass = $this->service->getPatternClass($patternId);
        } catch (UnknownPatternClassException $error) {
            abort(404, $error->getMessage());
        }

        // Pattern exists for this component — fetch context data based on query
        /** @var \njpanderson\Braid\Contracts\PatternDefinition */
        $pattern = new $patternClass();

        $context = $this->service->getContext($pattern, $contextId);

        if ($context instanceof View) {
            // Context is already a view, just return it
            return view('braid::pattern', [
                'pattern' => $context->render(),
                'patternMapId' => $this->service->getJsPatternMapId($patternId, $contextId)
            ]);
        }

        $componentView = $pattern->getView();

        return view('braid::pattern', [
            'patternMapId' => $this->service->getJsPatternMapId($patternId, $contextId),
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
