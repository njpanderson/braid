<?php

namespace njpanderson\Braid\Exceptions;

use \Exception;

class PatternContextViewNotFoundException extends Exception
{
    public function __construct(
        public string $path
    ) {
        parent::__construct(
            "Pattern context view at path {$path} could not be found."
        );
    }
}