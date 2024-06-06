<dl
    {{ $attributes->class([
        'text-sm lg:grid grid-cols-[max-content_1fr]'
    ]) }}
>
    @foreach ($items as $item)
        <x-braid::elements.definition
            :icon="$item['icon'] ?? ''"
            :clip="$item['clip']"
        >
            <x-slot:topic>
                {{ $item['label'] }}
            </x-slot:topic>
            {{ $item['value'] }}
        </x-braid::elements.definition>
    @endforeach
    {{ $slot ?? '' }}
</dl>
