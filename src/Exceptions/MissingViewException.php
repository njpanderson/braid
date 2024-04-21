<?php

namespace njpanderson\Braid\Exceptions;

use \Exception;

class MissingViewException extends Exception
{
    public function __construct(
        public string $viewName
    ) {
        parent::__construct();
    }
}