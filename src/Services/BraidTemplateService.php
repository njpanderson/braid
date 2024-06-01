<?php

namespace njpanderson\Braid\Services;

class BraidTemplateService
{
    public function getStatusOptionsForSelect(
        ?int $selectedValue = -1
    ) {
        return collect(config('braid.statuses'))
            ->map(fn($status, $id) => ([
                'id' => $id,
                'selected' => ($id === $selectedValue),
                'label' => $status['label']
            ]))
            ->unshift([
                'id' => '',
                'label' => __('Unknown')
            ]);
    }
}