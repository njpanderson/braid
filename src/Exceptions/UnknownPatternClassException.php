<?php

namespace njpanderson\Braid\Exceptions;

use \Exception;

class UnknownPatternClassException extends Exception
{
    public function __construct(
        public string $className
    ) {
        parent::__construct(
            "Pattern class {$className} could not be found."
        );
    }
}