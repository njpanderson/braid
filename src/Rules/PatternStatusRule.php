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
        $statuses = collect(config('braid.statuses'));

        if (
            !empty($value) &&
            !$statuses->contains('id', $value)
        ) {
            $fail('The :attribute is invalid.');
        }
    }
}
