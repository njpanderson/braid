<?php

namespace njpanderson\Braid\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PatternStatusRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $statuses = config('braid.patterns.statuses');

        if (
            !empty($value) &&
            !array_key_exists($value, $statuses)
        ) {
            $fail('The :attribute is invalid.');
        }
    }
}
