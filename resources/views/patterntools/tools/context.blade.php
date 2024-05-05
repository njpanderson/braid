@if (is_iterable($contextData))
    {{-- Show as object data --}}
    @include('braid::patterntools.tools.partials.contexttable', [
        'context' => $contextData,
        'level' => 0
    ])
@elseif (is_string($contextData) && !empty($contextData))
    <pre class="text-sm min-h-full w-full flex items-stretch" data-highlight="blade">{{ $contextData }}</pre>
@else
    <p>No context data</p>
@endif