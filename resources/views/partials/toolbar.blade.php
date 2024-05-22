<div
    x-data="toolbar"
    class="h-[50px] bg-neutral-200 dark:bg-neutral-600 dark:text-white flex items-center px-2 gap-x-2 border-b-2 border-neutral-300 dark:border-neutral-400 shrink-0"
>
    <x-braid::toolbutton
        icon="arrow-right-start-on-rectangle"
        x-show="!store.menuOpen"
        @click="store.menuOpen = !store.menuOpen"
        data-tooltip="Open menu"
        label-hidden
    >Open menu</x-braid::toolbutton>

    <template x-if="activePattern.id">
        <div class="flex w-full justify-between items-center gap-x-2">
            <span class="block w-[2px] bg-neutral-50 dark:bg-neutral-500 self-stretch rounded" x-show="!store.menuOpen"></span>

            <h1 class="flex gap-1 mr-auto whitespace-nowrap text-ellipsis">
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
                                @click="fire('button:set-canvas-width', '{{ $size->size }}')"
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
                    class="transition-colors duration-300 ml-2 min-w-[7ch] rounded text-white py-1 px-1 text-sm text-center hover:bg-accent-700 has-[:focus]:bg-accent-700"
                    :class="{
                        'bg-neutral-500': !store.canvas.resizing,
                        'bg-accent-700': store.canvas.resizing
                    }"
                >
                    <input
                        :size="getCanvasResizeInputSize()"
                        x-model="store.canvas.resizeInputValue"
                        @keyup.enter="fire('submit-canvas-width', null, $event)"
                        @keyup.esc="$event.target.blur()"
                        @focus="$event.target.select()"
                        class="bg-transparent outline-none text-center"
                        maxlength="4"
                    />px
                </span>
            </div>

            <ul class="flex ml-auto gap-x-2">
                <li>
                    <x-braid::toolbutton
                        id="toggle-ruler"
                        icon="bars-3-center-left"
                        icon-class="-rotate-90"
                        toggle-state="store.ruler.open"
                        data-tooltip="{{ __('Toggle ruler') }}"
                    />
                </li>

                <li class="flex"><span class="block border-r border-r-neutral-200/50 my-1.5"></span></li>

                <li>
                    <x-braid::toolbutton
                        id="reload-pattern"
                        icon="arrow-path-rounded-square"
                        data-tooltip="{{ __('Reload pattern') }}"
                    />
                </li>

                <li>
                    <x-braid::toolbutton
                        id="copy-pattern-url"
                        icon="link"
                        data-tooltip="{{ __('Copy link to pattern') }}"
                    />
                </li>

                <li>
                    <x-braid::toolbutton
                        id="open-new-window"
                        icon="arrow-top-right-on-square"
                        data-tooltip="{{ __('Open in new window or tab') }}"
                    />
                </li>
            </ul>
        </div>
    </template>
</div>