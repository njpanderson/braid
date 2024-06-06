@if(isset($topic))
    <dt
        {{ $attributes->class([
            'text-left py-1 pl-2 pr-4 font-semibold flex items-start'
        ]) }}
    >
        @if (!empty($icon))
            @svg(
                'heroicon-' . ($icon),
                'w-[22px] pr-1',
                [
                    'width' => 22,
                    'height' => 22,
                    'style' => implode(' ', [
                        (!empty($iconFill) ? "fill: ${iconFill}" : ''),
                        (!empty($iconStroke) ? "stroke: ${iconStroke}" : ''),
                    ])
                ]
            )
        @endif
        {{ $topic }}
    </dt>
@endif

<dd
    {{ $attributes->class([
        'flex items-center font-mono py-1 px-2'
    ]) }}
>
    @if (isset($clip) && $clip)
        <x-braid::elements.clipboard
            class="mr-1"
            clip="{{ $clip === true ? trim($slot) : $clip }}"
        />
    @endif
    {{ $slot }}
</dd>
