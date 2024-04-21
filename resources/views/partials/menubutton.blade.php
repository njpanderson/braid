<button
    type="button"
    class="py-1 hover:underline flex gap-1 items-center w-full"
    :class="{
        'underline': activePattern.id == '{{ $patternId }}'
    }"
    @click="switchPattern('{{ $patternId }}')"
>
    @if (isset($icon))
        @svg('heroicon-o-' . $icon, 'w-4 h-4')
    @endif
    {{ $label }}
</button>