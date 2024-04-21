<button
    type="button"
    class="px-1 py-0.5 rounded-md hover:bg-amber-200 flex gap-1 items-center w-full"
    :class="{
        'bg-amber-300': activePattern.id == '{{ $patternId }}'
    }"
    @click="switchPattern('{{ $patternId }}')"
>
    @if (isset($icon))
        @svg('heroicon-o-' . $icon, 'w-4 h-4')
    @endif
    {{ $label }}
</button>