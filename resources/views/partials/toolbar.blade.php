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


    <div class="flex w-full justify-between items-center gap-x-2">
        <span class="block w-[2px] bg-neutral-50 dark:bg-neutral-500 self-stretch rounded" x-show="!store.menuOpen"></span>

        <h1 class="flex gap-1 mr-auto whitespace-nowrap text-ellipsis" x-show="activePattern.id">
            @svg('heroicon-o-document', 'w-6 h-6')
            <span x-text="activePattern.label"></span>
            <span x-show="activePattern.contextLabel">
                <b>&nbsp;/&nbsp;</b>
                <span x-text="activePattern.contextLabel"></span>
            </span>
        </h1>

        <div class="flex mx-auto items-center" x-show="activePattern.id && config.response_sizes.enabled">
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
            <li class="flex items-center">
                <form
                    class="flex bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden border border-neutral-300"
                >
                    <label class="flex items-center p-1 px-1.5 has-[:checked]:bg-primary-300 hover:bg-primary-200 dark:has-[:checked]:bg-primary-500 dark:hover:bg-primary-600 group cursor-pointer transition-colors"
                        data-tooltip="Light mode">
                        <input type="radio" name="darkmode" value="off" x-model="store.theme.darkMode" class="sr-only peer">
                        <span class="sr-only">Dark Mode Off</span>
                        <x-heroicon-s-sun class="w-4 h-4 fill-neutral-700 dark:fill-neutral-200 peer-checked:fill-neutral-900 dark:peer-checked:fill-neutral-200 group-hover:fill-neutral-900 dark:group-hover:fill-neutral-200"/>
                    </label>

                    <label class="flex items-center p-1 has-[:checked]:bg-neutral-400 dark:has-[:checked]:bg-neutral-600 hover:bg-neutral-200 dark:hover:bg-neutral-700 group cursor-pointer transition-colors"
                        data-tooltip="Use system colour scheme">
                        <input type="radio" name="darkmode" value="auto" x-model="store.theme.darkMode" class="sr-only">
                        <span class="w-[5px] h-[5px] rounded-full border border-neutral-800 dark:border-neutral-300"><span class="sr-only">Mode Auto</span></span>
                    </label>

                    <label class="flex items-center p-1 px-1.5 has-[:checked]:bg-primary-300 hover:bg-primary-200 dark:has-[:checked]:bg-primary-500 dark:hover:bg-primary-600 group cursor-pointer transition-colors"
                        data-tooltip="Dark mode">
                        <input type="radio" name="darkmode" value="on" x-model="store.theme.darkMode" class="sr-only peer">
                        <span class="sr-only">Dark Mode On</span>
                        <x-heroicon-s-moon class="w-4 h-4 fill-neutral-700 dark:fill-neutral-200 peer-checked:fill-neutral-900 dark:peer-checked:fill-neutral-200 group-hover:fill-neutral-900 dark:group-hover:fill-neutral-200"/>
                    </label>
                </form>
            </li>

            <x-braid::toolbar.divider/>

            <li x-show="activePattern.id">
                <x-braid::toolbutton
                    id="toggle-ruler"
                    icon="bars-3-center-left"
                    icon-class="-rotate-90"
                    toggle-state="store.ruler.open"
                    data-tooltip="{{ __('Toggle ruler') }}"
                />
            </li>

            <x-braid::toolbar.divider x-show="activePattern.id"/>

            <li>
                <x-braid::toolbutton
                    id="reload-pattern"
                    icon="arrow-path-rounded-square"
                    data-tooltip="{{ __('Reload') }}"
                />
            </li>

            <li x-show="activePattern.id">
                <x-braid::toolbutton
                    id="copy-pattern-url"
                    icon="link"
                    data-tooltip="{{ __('Copy link to pattern') }}"
                />
            </li>

            <li x-show="activePattern.id">
                <x-braid::toolbutton
                    id="open-new-window"
                    icon="arrow-top-right-on-square"
                    data-tooltip="{{ __('Open in new window or tab') }}"
                />
            </li>
        </ul>
    </div>
</div>