<?php

namespace njpanderson\Braid\Traits;

use Illuminate\Support\Collection;
use njpanderson\Braid\Dictionaries\ScopedSlot;

trait HasScopedSlots {
    private array $scopedSlots = [];

    public function getScopedSlots(): array
    {
        return $this->scopedSlots;
    }

    public function setScopedSlots($scopedSlots = [])
    {
        // Convert any slot data into proper classes
        $scopedSlots = (new Collection($scopedSlots))
            ->map(function($scopedSlot) {
                if (!empty($scopedSlot) && !($scopedSlot instanceof ScopedSlot))
                    return new ScopedSlot($scopedSlot);

                return $scopedSlot;
            });

        $this->scopedSlots = $scopedSlots->toArray();
    }

    public function hasScopedSlots(): bool
    {
        return !empty($this->scopedSlots);
    }
}