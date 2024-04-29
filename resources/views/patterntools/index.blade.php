<div
    x-data="patternTools"
    x-show="loadedPattern"
    @patternloaded.window="onPatternLoaded"
    @patternunloaded.window="onPatternUnLoaded"
    class="h-full"
>
    <menu class="h-[40px] border-b border-neutral-50 dark:border-neutral-400 bg-neutral-200 dark:bg-neutral-700">
        <ul
            role="tablist"
            class="flex items-stretch gap-1 h-full"
        >
            <template x-for="tool in tools" :key="tool.id">
                <li class="flex align-bottom">
                    <a
                        :href="`#tab-${tool.id}`"
                        class="block px-3 py-2 text-sm border-b-4 hover:border-accent-400 dark:hover:border-accent-300"
                        :class="{
                            'text-accent-400 dark:text-accent-300 border-accent-400 dark:border-accent-300': isActiveTool(tool.id),
                            'border-transparent': !isActiveTool(tool.id)
                        }"
                        x-text="tool.label"
                        @click.prevent="loadTool(tool.id)"
                    ></a>
                </li>
            </template>

            <li class="flex items-stretch ml-auto">
                <button
                    data-dragbar
                    class="flex items-center px-2 hover:bg-neutral-50 dark:hover:bg-neutral-600 cursor-ns-resize"
                >
                    @svg('heroicon-o-bars-2', 'w-6 h-6')
                </button>
            </li>
        </ul>
    </menu>

    <div x-ref="tabs">
        <template x-for="tool in tools" :key="tool.id">
            <div
                class="p-2 h-full basis-full z-0 bg-neutral-100 dark:bg-neutral-500"
                role="tab"
                x-show="isActiveTool(tool.id)"
                x-html="tool.content"
            ></div>
        </template>
    </div>
</div>