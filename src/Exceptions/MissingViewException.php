<?php

namespace njpanderson\Braid\Exceptions;

use njpanderson\Braid\Base\BraidException;

class MissingViewException extends BraidException
{
    public function __construct(
        public string $viewName
    ) {
        parent::__construct(
            "The view {$viewName} could not be found."
        );
    }
}