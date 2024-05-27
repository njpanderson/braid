<?php

namespace njpanderson\Braid\Http\Controllers;

use njpanderson\Braid\Http\Requests\UpdatePatternRequest;
use njpanderson\Braid\Base\Pattern;
use njpanderson\Braid\Contracts\Storage\PatternsRepository;
use njpanderson\Braid\Models\Pattern as ModelsPattern;
use njpanderson\Braid\Services\BraidService;

class PatternController
{
    public function __construct(
        private BraidService $service
    ) { }

    public function update(
        UpdatePatternRequest $request,
        PatternsRepository $repo,
        Pattern $pattern
    ) {
        $model = $repo->findByPatternId($pattern->getId());

        if (!$model) {
            $model = $repo->create([
                'pattern_id' => $pattern->getId()
            ]);
        }

        $repo->update($model->id, $request->validated());
    }
}
