@if ($dir['items'])
    <ul
        @class([
            'pl-1 ml-2 border-l-4 border-primary-400' => $dir['level'],
            'p-2' => !$dir['level']
        ])
    >
        @foreach ($dir['items'] as $item)
            <li @class([
                'my-1 pl-2' => $dir['level']
            ])>
                @if ($item['type'] === 'dir')
                    <span class="flex items-center gap-1 text-neutral-700 dark:text-neutral-100 py-1">
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
                                    <li class="my-1 pl-4">
                                        <span class="flex gap-1 items-center">
                                            @include('braid::partials.menubutton', [
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
@else
    <p class="p-2">No patterns found in the namespace <b>{{ config('braid.patterns_namespace') }}</b>.</p>
@endif