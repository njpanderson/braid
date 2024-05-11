<div class="bg-neutral-200 dark:bg-neutral-600 dark:text-white flex items-center px-2 gap-x-2 border-b-2 border-neutral-300 dark:border-neutral-400">
    <x-braid-toolbutton
        icon="arrow-right-start-on-rectangle"
        x-show="!uiState.menuOpen"
        @click="uiState.menuOpen = !uiState.menuOpen"
        label-hidden
    >Open menu</x-braid-toolbutton>

    <template x-if="activePattern.id">
        <div class="flex w-full justify-between items-center gap-x-2">
            <span class="block w-[2px] bg-neutral-50 dark:bg-neutral-500 self-stretch rounded" x-show="!uiState.menuOpen"></span>

            <h1 class="flex gap-1 mr-auto">
                @svg('heroicon-o-document', 'w-6 h-6')
                <span x-text="activePattern.label"></span>
                <span x-show="activePattern.contextLabel">
                    <b>&nbsp;/&nbsp;</b>
                    <span x-text="activePattern.contextLabel"></span>
                </span>
            </h1>

            <div class="flex mx-auto items-center" x-show="config.response_sizes.enabled">
                <x-heroicon-o-computer-desktop class="w-4 mr-2"/>

                <ul class="flex items-center overflow-hidden">
                    @foreach($braid->getResponseSizes() as $index => $size)
                        <li class="block">
                            <button
                                id="braid-toolbar-response-size-{{ $index }}"
                                class="px-2 py-1 border border-neutral-400 rounded-md hover:bg-accent-300"
                                :class="getCanvasRangeClasses({{ $size->size }}, null, 'bg-accent-500 text-white border-accent-600')"
                                x-on:click="setCanvasWidth({{ $size->size }})"
                                data-tooltip="{{ __('Switch canvas size to') . ' ' . $size->size . 'px' }}"
                            >{{ $size->label }}</button>
                        </li>
                        @if(!$loop->last)
                            <li class="flex items-center">
                                <span
                                    class="block w-[6px] h-[6px] rounded-full mx-1"
                                    :class="getCanvasRangeClasses({{ $size->range[0] }}, {{ $size->range[1] }}, 'bg-accent-500', 'bg-neutral-500')"
                                ></span>
                            </li>
                        @endif
                    @endforeach
                </ul>

                <span
                    class="ml-2 min-w-[7ch] rounded text-white py-1 text-sm text-center"
                    :class="{
                        'bg-neutral-500': !uiState.canvas.resizing,
                        'bg-accent-700': uiState.canvas.resizing
                    }"
                >
                    <span x-text="uiState.canvas.width"></span>px
                </span>
            </div>

            <div class="flex items-center ml-auto gap-x-2">
                <x-braid-toolbutton
                    icon="arrow-path-rounded-square"
                    data-tooltip="{{ __('Reload pattern') }}"
                    @click="reloadPattern"
                />

                <x-braid-toolbutton
                    icon="arrow-top-right-on-square"
                    data-tooltip="{{ __('Open in new window or tab') }}"
                    @click="openPatternInNewWindow"
                />
            </div>
        </div>
    </template>
</div>