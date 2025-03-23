@inject('files', 'njpanderson\Braid\Services\BraidFileService')

@if ($dir['items'])
    <ul
        @class([
            'text-md',
            'pl-1 ml-3 border-l-4 border-primary-400' => $dir['level'],
            'px-2' => !$dir['level']
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
                    {{-- Directories --}}
                    <button
                        class="w-full px-1 rounded-md group"
                        @click="toggle"
                    >
                        <span class="flex items-center gap-1 text-neutral-700 dark:text-neutral-100 py-1">
                            @if (!$dir['level'])
                                @svg('heroicon-o-folder', 'h-6 w-6 shrink-0')
                            @else
                                @svg('heroicon-o-folder', 'h-5 w-5 shrink-0')
                            @endif
                            <b
                                @class([
                                    'font-semibold overflow-hidden text-ellipsis',
                                    'text-lg' => !$dir['level']
                                ])
                            >{{ $item['label'] }}</b>

                            @foreach (['down', 'right'] as $direction)
                            <span x-show="{{ $direction === 'down' ? 'open' : '!open' }}" class="ml-auto shrink-0">
                                @svg('heroicon-o-chevron-' . $direction, 'h-5 w-5 ring rounded ring-2 ring-transparent group-hover:ring-accent-400')
                            </span>
                            @endforeach
                        </span>
                    </button>

                    @include('braid::partials.menu', [
                        'dir' => $item,
                        'depth' => ($depth + 1)
                    ])
                @else
                    {{-- Files --}}
                    <span class="flex font-medium">
                        <x-braid::menu.button
                            :icon="$item['icon']"
                            :patternId="$item['id']"
                        >
                            {{ $item['label'] }}
                            <x-slot:status>
                                <span
                                    class="shrink-0 rounded-full m-1 w-[8px] h-[8px] pointer-events-none"
                                    :style="getPatternStatusColour('{{ $item['id'] }}')"
                                ></span>
                            </x-slot:status>
                        </x-braid::menu.button>
                    </span>

                    @if (count($item['contexts']) > 1)
                        <ul class="pl-1 text-sm">
                            @foreach ($item['contexts']  as $context)
                                @if (!$context['default'])
                                    <li class="my-1 pl-6">
                                        <span class="flex gap-1 items-center">
                                            <x-braid::menu.button
                                                :patternId="$context['id']"
                                            >
                                                {{ $context['label'] }}
                                            </x-braid::menu.button>
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
@elseif($depth === 0)
    <p class="p-2">No patterns found in the namespace <b>{{ $files->getPatternsNamespace() }}</b>.</p>
@else
    <p class="p-2 text-sm text-slate-500" x-show="open">(Empty)</p>
@endif
