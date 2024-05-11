@if ($dir['items'])
    <ul
        @class([
            'text-md',
            'pl-1 ml-3 border-l-4 border-primary-400' => $dir['level'],
            'p-2' => !$dir['level']
        ])
        @if ($dir['level'])
            x-show="open"
        @endif
    >
        @foreach ($dir['items'] as $item)
            <li
                @if ($item['type'] === 'dir')
                    x-data="menuFolder('{{ $item['id'] }}')"
                    x-ref="root"
                @endif
                @class([
                    'my-1' => $dir['level'],
                ])
            >
                @if ($item['type'] === 'dir')
                    <button
                        class="w-full px-1 rounded-md group"
                        @click="toggle"
                        data-tooltip="{{
                            __('Open/close folder ') .
                            '<i class="block text-xs">' .
                            __('hold alt/opt to close all descendents') .
                            '</i>'
                        }}"
                    >
                        <span class="flex items-center gap-1 text-neutral-700 dark:text-neutral-100 py-1">
                            @if (!$dir['level'])
                                @svg('heroicon-o-folder', 'h-6')
                            @else
                                @svg('heroicon-o-folder', 'h-5')
                            @endif
                            <b
                                @class([
                                    'font-semibold',
                                    'text-lg' => !$dir['level']
                                ])
                            >{{ $item['label'] }}</b>

                            @foreach (['down', 'right'] as $direction)
                            <span x-show="{{ $direction === 'down' ? 'open' : '!open' }}" class="ml-auto">
                                @svg('heroicon-o-chevron-' . $direction, 'h-5 ring rounded ring-2 ring-transparent group-hover:ring-accent-400')
                            </span>
                            @endforeach
                        </span>
                    </button>

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
                                    <li class="my-1 pl-6">
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