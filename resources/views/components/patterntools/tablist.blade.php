<menu class="w-full border-b border-neutral-50 dark:border-neutral-400">
    <ul
        role="tablist"
        class="flex pt-[6px] items-stretch gap-1 h-full"
    >
        <template x-for="tool in tools" :key="tool.id">
            <li class="flex align-bottom font-semibold">
                <a
                    :href="`#tab-${tool.id}`"
                    class="flex items-center px-3 py-1.5 text-sm border-b-[3px] hover:border-accent-500 dark:hover:border-accent-300"
                    :class="{
                        'text-accent-600 dark:text-accent-300 border-accent-600 dark:border-accent-300': isActiveTool(tool.id),
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
    </ul>
</menu>
