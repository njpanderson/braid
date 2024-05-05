@if (is_iterable($contextData))
    {{-- Show as object data --}}
    @include('braid::patterntools.tools.partials.contexttable', [
        'context' => $contextData,
        'level' => 0
    ])
@elseif (is_string($contextData) && !empty($contextData))
    <div class="grid h-full grid-rows-[min-content_1fr]">
        @if ($contextDataPath)
            <p class="flex px-2 py-1 text-sm bg-neutral-200 dark:bg-neutral-700 items-center">
                @svg('heroicon-o-document', 'h-5')
                <code>{{ $contextDataPath }}</code>
            </p>
        @endif
        <pre class="flex items-stretch w-full overflow-auto text-sm" data-highlight="blade">{{ $contextData }}</pre>
    </div>
@else
    <p class="p-2">No context data</p>
@endif