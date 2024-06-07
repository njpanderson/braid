@props([
    'type',
    'patternId',
    'icon'
])

<button
    type="button"
    {{ $attributes->class([
        'flex items-center w-full px-1 py-0.5 rounded-md hover:bg-accent-500 dark:hover:bg-accent-600 dark:hover:text-white gap-1'
    ]) }}
    :class="{
        'bg-accent-300 dark:bg-accent-700 text-neutral-800 dark:text-white': activePattern && activePattern.id == '{{ $patternId }}'
    }"
    @click="switchPattern('{{ $patternId }}')"
>
    @if (isset($icon))
        @svg('heroicon-o-' . $icon, 'w-4 h-4 shrink-0')
    @endif
    <span class="block w-full text-ellipsis whitespace-nowrap overflow-hidden text-left">
        {{ $slot }}
    </span>
    @if (isset($status))
        {{ $status }}
    @endif
</button>
