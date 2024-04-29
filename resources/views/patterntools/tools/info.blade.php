<ul>
    <li>Pattern ID: {{ $pattern->getLabel() }}</li>
    @if ($contextId)
        <li>Context: {{ $contextId }}</li>
    @endif
</ul>