@include('braid::patterntools.tools.partials.contexttable', [
    'context' => $pattern->getContextData($contextId),
    'level' => 0
])