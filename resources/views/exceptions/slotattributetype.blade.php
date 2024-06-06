<p class="my-2">{{ $error->getMessage() }}</p>

<x-braid::elements.note>
    <p>The slot attribute <b>{{ $error->attrName }}</b> may be of an unexpected type. Braid supplied <a href="https://njpanderson.github.io/braid/docs/contexts/context-data/#defining-context-data" target="_blank">Attributes</a> require data that can resolve to a string.</p>
</x-braid::elements.note>
