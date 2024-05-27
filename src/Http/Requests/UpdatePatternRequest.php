<?php

namespace njpanderson\Braid\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use njpanderson\Braid\Braid;
use njpanderson\Braid\Rules\PatternStatusRule;

class UpdatePatternRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Braid::isAuthed($this);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'status' => [
                new PatternStatusRule
            ],
            'notes' => [
                'string',
                'nullable'
            ]
        ];
    }
}
