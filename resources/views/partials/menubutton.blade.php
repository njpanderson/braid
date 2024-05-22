<button
    type="button"
    class="flex items-center w-full px-1 py-0.5 rounded-md hover:bg-accent-400 dark:hover:bg-accent-600 gap-1"
    :class="{
        'bg-accent-300': activePattern.id == '{{ $patternId }}'
    }"
    @click="switchPattern('{{ $patternId }}')"
>
    @if (isset($icon))
        @svg('heroicon-o-' . $icon, 'w-4 h-4 shrink-0')
    @endif
    <span class="block w-full text-ellipsis whitespace-nowrap overflow-hidden text-left">{{ $label }}</span>
</button>