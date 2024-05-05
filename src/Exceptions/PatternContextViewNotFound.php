<?php

namespace njpanderson\Braid\Exceptions;

use \Exception;

class PatternContextViewNotFound extends Exception
{
    public function __construct(
        public string $path
    ) {
        parent::__construct();

        $this->message = __("Pattern context view at path {$path} could not be found.");
    }
}