<div class="bg-neutral-200 dark:bg-neutral-600 dark:text-white flex items-center px-2 gap-x-2 border-b-2 border-neutral-300 dark:border-neutral-400">
    <x-braid-toolbutton
        icon="arrow-right-start-on-rectangle"
        x-show="!uiState.menuOpen"
        @click="uiState.menuOpen = !uiState.menuOpen"
        label-hidden
    >Open menu</x-braid-toolbutton>

    <template x-if="activePattern.id">
        <div class="flex w-full items-center gap-x-2">
            <span class="block w-[2px] bg-neutral-50 dark:bg-neutral-500 self-stretch rounded" x-show="!uiState.menuOpen"></span>

            <h1 class="flex gap-1">
                @svg('heroicon-o-document', 'w-6 h-6')
                <span x-text="activePattern.label"></span>
                <span x-show="activePattern.contextLabel">
                    <b>&nbsp;/&nbsp;</b>
                    <span x-text="activePattern.contextLabel"></span>
                </span>
            </h1>

            <div class="flex items-center gap-x-2 ml-auto">
                <x-braid-toolbutton
                    icon="arrow-path-rounded-square"
                    title="{{ __('Reload pattern') }}"
                    @click="reloadPattern"
                />

                <x-braid-toolbutton
                    icon="arrow-top-right-on-square"
                    title="{{ __('Open in new window or tab') }}"
                    @click="openPatternInNewWindow"
                />
            </div>
        </div>
    </template>
</div>