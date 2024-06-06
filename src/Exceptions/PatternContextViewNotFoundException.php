<?php

namespace njpanderson\Braid\Exceptions;

use njpanderson\Braid\Base\BraidException;

class PatternContextViewNotFoundException extends BraidException
{
    public function __construct(
        public string $path
    ) {
        parent::__construct(
            "Pattern context view at path {$path} could not be found."
        );
    }
}
