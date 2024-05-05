<div
    x-data="patternTools"
    x-show="loadedPattern"
    @patternloaded.window="onPatternLoaded"
    @patternunloaded.window="onPatternUnLoaded"
    class="relative h-full flex flex-col bg-neutral-50 dark:bg-neutral-800"
>
    <button
        data-draggable-grid-trigger
        class="absolute top-0 left-0 right-0 h-[6px] bg-neutral-300 dark:bg-neutral-500 cursor-ns-resize flex items-center justify-center hover:bg-accent-300 dark:hover:bg-accent-600"
        title="Resize tools (click to toggle size)"
    ><span class="w-[20px] bg-neutral-600 dark:bg-neutral-100 h-[1px]"></span></button>
    <menu class="h-[40px] w-full border-b border-neutral-50 dark:border-neutral-400 bg-neutral-200 dark:bg-neutral-700">
        <ul
            role="tablist"
            class="flex pt-[6px] items-stretch gap-1 h-full"
        >
            <template x-for="tool in tools" :key="tool.id">
                <li class="flex align-bottom font-semibold">
                    <a
                        :href="`#tab-${tool.id}`"
                        class="flex items-center px-3 py-2 text-sm border-b-4 hover:border-accent-400 dark:hover:border-accent-300"
                        :class="{
                            'text-accent-400 dark:text-accent-300 border-accent-400 dark:border-accent-300': isActiveTool(tool.id),
                            'border-transparent': !isActiveTool(tool.id)
                        }"
                        @click.prevent="loadTool(tool.id)"
                    >
                        <span x-text="tool.label"></span>
                        <x-heroicon-o-arrow-path
                            class="w-4 h-4 ml-1 animate-spin"
                            x-show="tool.loading"
                        />
                    </a>
                </li>
            </template>

            {{-- <li class="flex items-stretch ml-auto">
                <button
                    data-draggable-grid-trigger
                    class="flex items-center px-2 hover:bg-neutral-50 dark:hover:bg-neutral-600 cursor-ns-resize"
                    title="Resize tools (click to toggle size)"
                >
                    @svg('heroicon-o-bars-2', 'w-6 h-6')
                </button>
            </li> --}}
        </ul>
    </menu>

    <div x-ref="tabs" class="w-full h-full overflow-auto">
        <template x-for="tool in tools" :key="tool.id">
            <div
                class="h-full w-full flex justify-stretch"
                role="tab"
                x-show="isActiveTool(tool.id)"
            >
                <template x-if="tool.error">
                    <div class="text-red-600">
                        <h2 class="font-semibold">Error</h2>
                        <p x-text="tool.error.message"></p>
                        <p class="text-sm">(More information may be available in the console)</p>
                    </div>
                </template>

                <template x-if="!tool.error">
                    <div x-html="tool.content" class="w-full h-full"></div>
                </template>
            </div>
        </template>
    </div>
</div>