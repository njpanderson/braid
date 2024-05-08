<?php

namespace njpanderson\Braid\Exceptions;

// use njpanderson\Braid\Base\BraidException;
use \Exception;

class SlotAttributeTypeException extends Exception
{
    public function __construct(
        public string $attrName,
        public $attrValue,
        public string $expectedType,
    ) {
        $type = gettype($attrValue);

        parent::__construct(
            "Slot attribute {$attrName} must be of type {$expectedType}, {$type} given."
        );
    }
}