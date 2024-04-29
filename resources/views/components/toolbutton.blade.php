<button
    class="flex items-center p-1 hover:bg-neutral-100 dark:hover:bg-neutral-500 rounded"
    {{ $attributes }}
>
    @svg('heroicon-o-' . ($icon ?? ''), 'w-6 h-6')
    @if ($slot->hasActualContent())
        <span
            @class([
                'pl-1 w-max',
                'sr-only' => $labelHidden
            ])
        >{{ $slot }}</span>
    @endif
</button>