<?php

namespace njpanderson\Braid\Tests\Patterns;

use Illuminate\View\View;

use njpanderson\Braid\Contracts\PatternContext;
use njpanderson\Braid\Base\Pattern as Base;

class BasicPattern extends Base
{
    protected $contexts = [
        'context1',
        'context2' => 'Context Number 2',
    ];

    public function contextData(string $context): PatternContext|View
    {
        switch ($context) {
        case 'context1':
            return $this->makeContext(
                attributes: [
                    'attribute1' => 'attribute1_value',
                    'attribute2' => 'attribute2_value'
                ],
                slot: 'Slot context 1',
                scopedSlots: [
                    'scoped_slot_1' => $this->makeScopedSlot(
                        slot: 'Scoped slot context 1',
                        attributes: [
                            'scoped_attribute1' => 'scoped_attribute1_value'
                        ]
                    )
                ]
            );

        case 'context2':
            return $this->makeContext(
                attributes: [
                    'attribute1' => 'attribute1_value',
                    'attribute2' => 'attribute2_value'
                ],
                slot: 'Slot context 2',
                scopedSlots: [
                    'scoped_slot_1' => $this->makeScopedSlot(
                        slot: 'Scoped slot context 1',
                        attributes: [
                            'scoped_attribute1' => 'scoped_attribute1_value'
                        ]
                    ),
                    'scoped_slot_2' => 'Scoped slot context 2',
                ]
            );

        default:
            return $this->makeContext(
                slot: 'Slotdata default'
            );
        }
    }
}
