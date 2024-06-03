<?php

namespace njpanderson\Braid\Services;

use njpanderson\Braid\Braid;

class BraidTemplateService
{
    public function getStatusesJS()
    {
        return (collect(
            config('braid.statuses') ?? []
        )->toJson());
    }

    public function getDarkModeJS()
    {
        if (Braid::$darkMode === null)
            return 'auto';

        return Braid::$darkMode ? 'on' : 'off';
    }

    public function getStatusOptionsForSelect(
        ?int $selectedValue = -1
    ) {
        return collect(config('braid.statuses'))
            ->map(fn($status) => ([
                'id' => $status['id'],
                'selected' => ($status['id'] === $selectedValue),
                'label' => $status['label']
            ]))
            ->unshift([
                'id' => '',
                'label' => __('Unknown')
            ]);
    }
}