<div
    x-data="patternTools"
    x-show="loadedPattern"
    @patternloaded.window="onPatternLoaded"
    @patternunloaded.window="onPatternUnLoaded"
    class="relative h-full flex flex-col bg-neutral-50 dark:bg-neutral-800"
>
    <button
        data-draggable-handle="patternLibrary"
        data-draggable-type="rows"
        class="absolute top-0 left-0 right-0 h-[6px] bg-neutral-300/50 dark:bg-neutral-500/50 cursor-ns-resize flex items-center justify-center hover:bg-accent-300 dark:hover:bg-accent-600"
        title="Resize tools"
    ><span class="w-[20px] bg-neutral-600 dark:bg-neutral-100 h-[1px]"></span></button>
    <x-braid::patterntools.tablist/>

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
