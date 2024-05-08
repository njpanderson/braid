<?php

namespace njpanderson\Braid\Base;

use Illuminate\Support\Facades\Route;

use \Exception;

abstract class BraidException extends Exception
{
    protected $patternClassName = '';

    public function render() {
        if (!config('braid.exceptions'))
            return;

        return view('braid::error', [
            'error' => $this,
            'showDevErrorSuggestions' => true
        ]);
    }
}