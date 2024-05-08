<?php

namespace njpanderson\Braid\Exceptions;

use njpanderson\Braid\Base\BraidException;

class UnknownPatternClassException extends BraidException
{
    public function __construct(
        public string $className
    ) {
        parent::__construct(
            "Pattern class {$className} could not be found."
        );
    }
}