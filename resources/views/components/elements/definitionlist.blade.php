<dl
    class="text-sm lg:grid grid-cols-[max-content_1fr]"
    {{ $attributes }}
>
    @foreach ($items as $item)
        <dd
            @class([
                'text-left py-1 pr-4 font-semibold flex items-center',
                'bg-neutral-200 dark:bg-neutral-700' => $loop->even,
                $itemClasses
            ])
        >
            @if (!empty($item['icon']))
                @svg('heroicon-o-' . ($item['icon']), 'w-[22px] pr-1')
            @endif
            {{ $item['label'] }}
        </dt>

        <dd
            @class([
                'flex items-center font-mono py-1',
                'bg-neutral-200 dark:bg-neutral-700' => $loop->even,
                $itemClasses
            ])
        >
            @if ($item['clip'])
                <x-braid-elements.clipboard
                    class="mr-1"
                    clip="{{ $item['clip'] === true ? $item['value'] : $item['clip'] }}"
                />
            @endif
            {{ $item['value'] }}
        </dd>
    @endforeach
</dl>