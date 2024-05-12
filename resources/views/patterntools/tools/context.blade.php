@if ($context instanceof \njpanderson\Braid\Dictionaries\PatternContext && $context->hasContextData())
    {{-- Show as object data --}}
    <div class="grid grid-cols-[max-content_1fr]">
        @if ($context->hasAttributes())
            <x-braid::tools.context.header>
                Attributes
            </x-braid::tools.context.header>

            @include('braid::patterntools.tools.partials.contexttable', [
                'context' => $context->getAttributes(),
                'level' => 0
            ])
        @endif

        @if ($context->hasSlot())
            <x-braid::tools.context.header>
                Slot
            </x-braid::tools.context.header>

            <pre class="text-sm" data-highlight="blade">{{ $context->getSlot() }}</pre>
        @endif

        @if ($context->hasScopedSlots())
            <x-braid::tools.context.header>
                Scoped slots
            </x-braid::tools.context.header>

            <div>
                @foreach($context->getScopedSlots() as $slotName => $slot)
                    <pre class="text-sm" data-highlight="blade">&lt;x-slot:{{ $slotName }}&gt;{!! $slot->getSlot() !!}&lt;/x-slot&gt;</pre>

                    @if($slot->hasAttributes())
                        @include('braid::patterntools.tools.partials.contexttable', [
                            'context' => $slot->getAttributes(),
                            'level' => 1
                        ])
                    @endif
                @endforeach
            </div>
        @endif
    </div>
@elseif (is_string($context))
    <div class="grid h-full grid-rows-[min-content_1fr]">
        @if ($contextViewPath)
            <p class="flex px-2 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 items-center">
                @svg('heroicon-o-document', 'h-5')
                <code>{{ $contextViewPath }}</code>
            </p>
        @endif
        <pre class="flex items-stretch w-full overflow-auto text-sm" data-highlight="blade">{{ $context }}</pre>
    </div>
@else
    <p class="p-2">No context data</p>
@endif