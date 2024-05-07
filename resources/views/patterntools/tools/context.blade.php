@if ($context instanceof \njpanderson\Braid\Dictionaries\PatternContext)
    {{-- Show as object data --}}
    <div class="grid grid-cols-[max-content_1fr]">
        <h2 class="px-2 py-1 font-semibold bg-primary-100 text-sm">Attributes</h2>
        @include('braid::patterntools.tools.partials.contexttable', [
            'context' => $context->getAttributes(),
            'level' => 0
        ])

        @if ($context->hasSlot())
            <h2 class="px-2 py-1 font-semibold bg-primary-100 text-sm">Slot</h2>
            <pre class="text-sm" data-highlight="blade">{{ $context->getSlot() }}</pre>
        @endif

        @if ($context->hasScopedSlots())
            <h2 class="px-2 py-1 font-semibold bg-primary-100 text-sm">Scoped slots</h2>
            <div>
                @foreach($context->getScopedSlots() as $slotName => $slotValue)
                    <pre class="text-sm" data-highlight="blade">&lt;x-slot:{{ $slotName }}&gt;{!! $slotValue !!}&lt;/x-slot&gt;</pre>
                @endforeach
            </div>
        @endif
    </div>
@elseif (is_string($context))
    <div class="grid h-full grid-rows-[min-content_1fr]">
        @if ($contextPath)
            <p class="flex px-2 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 items-center">
                @svg('heroicon-o-document', 'h-5')
                <code>{{ $contextPath }}</code>
            </p>
        @endif
        <pre class="flex items-stretch w-full overflow-auto text-sm" data-highlight="blade">{{ $context }}</pre>
    </div>
@else
    <p class="p-2">No context data</p>
@endif