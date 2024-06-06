<?php

namespace njpanderson\Braid\Exceptions;

use njpanderson\Braid\Base\BraidException;

class ConfigurationException extends BraidException
{
    public function __construct(
        public $message
    ) {
        parent::__construct(
            "Configuration error: $message"
        );
    }
}
