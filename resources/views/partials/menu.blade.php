<ul @class([
    'ml-2' => $dir['level'],
    'pl-2' => $dir['level'],
    'border-l-4 border-amber-300' => $dir['level'],
    'bg-slate-50'
])>
    @foreach ($dir['items'] as $item)
        <li class="px-2">
            @if ($item['type'] === 'dir')
                <span class="flex items-center gap-1 text-blue-600 py-1">
                    @svg('heroicon-o-folder', 'w-6 h-6')
                    <b class="text-lg font-semibold">{{ $item['label'] }}</b>
                </span>

                @include('braid::partials.menu', [
                    'dir' => $item
                ])
            @else
                <span class="flex font-medium">
                    @include('braid::partials.menubutton', [
                        'icon' => 'document',
                        'patternId' => $item['id'],
                        'label' => $item['label']
                    ])
                </span>

                @if (count($item['contexts']) > 1)
                    <ul class="pl-1 text-sm">
                        @foreach ($item['contexts']  as $context)
                            @if (!$context['default'])
                                <li>
                                    <span class="flex gap-1 items-center">
                                        @include('braid::partials.menubutton', [
                                            'icon' => 'chevron-right',
                                            'patternId' => $context['id'],
                                            'label' => $context['label']
                                        ])
                                    </span>
                                </li>
                            @endif
                        @endforeach
                    </ul>
                @endif
            @endif
        </li>
    @endforeach
</ul>