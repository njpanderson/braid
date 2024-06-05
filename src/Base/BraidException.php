<?php

namespace njpanderson\Braid\Base;

use \Exception;

use Illuminate\View\View;

abstract class BraidException extends Exception
{
    protected $patternClassName = '';

    protected $hintView = 'braid::exceptions.error';

    public function render() {
        if (!config('braid.exceptions'))
            return;

        return view('braid::error', [
            'error' => $this,
            'showDevErrorSuggestions' => true
        ]);
    }

    public function renderHint(): string|View
    {
        return view($this->hintView, [
            'error' => $this
        ]);
    }
}