<?php

namespace njpanderson\Braid\Exceptions;

class UnknownPatternClassException extends \Exception
{
    public function __construct(
        public string $className
    ) {
        parent::__construct(
            "Pattern class {$className} could not be found."
        );
    }
}
