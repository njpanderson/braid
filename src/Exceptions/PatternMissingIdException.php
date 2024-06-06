<?php

namespace njpanderson\Braid\Exceptions;

use njpanderson\Braid\Base\BraidException;

class PatternMissingIdException extends BraidException
{
    protected $hintView = 'braid::exceptions.patternmissingid';

    public function __construct(
        public string $patternClass
    ) {
        parent::__construct(
            "The pattern class {$patternClass} is missing a required `\$id` attribute."
        );
    }
}
