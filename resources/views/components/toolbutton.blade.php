<button
    class="flex items-center p-1 hover:bg-neutral-100 dark:hover:bg-neutral-500 rounded"
    @if($toggleState)
        :class="{ 'ring-2 ring-accent-400 dark:ring-accent-200': {{ $toggleState }} }"
    @endif
    @if($id)
        @click="fire('button:{{ $id }}')"
    @endif
    {{ $attributes }}
>
    @svg('heroicon-o-' . ($icon ?? ''), $iconClass)
    @if ($slot->hasActualContent())
        <span
            @class([
                'pl-1 w-max',
                'sr-only' => $labelHidden
            ])
        >{{ $slot }}</span>
    @endif
</button>