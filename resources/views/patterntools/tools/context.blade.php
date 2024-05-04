@if (is_iterable($contextData))
    {{-- Show as object data --}}
    @include('braid::patterntools.tools.partials.contexttable', [
        'context' => $contextData,
        'level' => 0
    ])
@elseif (is_string($contextData) && !empty($contextData))
    <pre class="p-2 text-sm dark:text-white">{{ $contextData }}</pre>
@else
    <p>No context data</p>
@endif