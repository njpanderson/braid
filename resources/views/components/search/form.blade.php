<form
    x-data="search"
    class="relative mb-2 mx-2"
    @submit="onSearchSubmit"
>
    <div class="flex rounded-sm border-2 border-primary-200/40 focus-within:border-accent-300 bg-neutral-50 dark:bg-neutral-700">
        <input
            type="text"
            placeholder="Find patterns"
            x-model.debounce.150ms="store.search.term"
            @keyup.esc="onSearchClose"
            class="p-1 text-sm flex-grow appearance-none bg-transparent focus-visible:outline-none min-w-0"
        >

        @if ($braid->getIsRepositoryEnabled())
            <button
                type="button"
                class="flex shrink-0 items-center justify-center w-[25px] group"
                @click="toggleFilters()"
            >
                <span x-show="hasTerms">
                    <x-heroicon-s-funnel class="w-4 h-4 fill-accent-600"/>
                </span>
                <span x-show="!hasTerms">
                    <x-heroicon-o-funnel class="w-4 h-4 hover:stroke-accent-600"/>
                </span>
            </button>
        @endif

        <button
            type="submit"
            class="flex shrink-0 items-center justify-center w-[25px] group"
            x-show="!store.search.open"
        >
            <x-heroicon-s-magnifying-glass class="w-4 h-4 group-hover:stroke-accent-300"/>
        </button>

        <button
            type="button"
            class="flex shrink-0 items-center justify-center w-[25px] group"
            x-show="store.search.open"
            @click="onSearchClose"
        >
            <x-heroicon-s-x-mark class="w-4 h-4 group-hover:stroke-accent-300"/>
        </button>
    </div>

    @if ($braid->getIsRepositoryEnabled())
        <menu
            class="absolute left-0 right-0 border-l border-r border-b border-primary-200/40 rounded-b top-full bg-neutral-100"
            x-show="store.search.filters.open"
            @click.outside="closeFilters"
            x-transition
        >
            <div class="mb-4 last:mb-0">
                <h2 class="p-1 px-1.5 font-semibold text-md">Status</h2>

                @foreach(config('braid.statuses') as $index => $status)
                    <label class="flex items-center p-1 px-1.5 has-[:checked]:bg-accent-300 hover:bg-primary-200 dark:has-[:checked]:bg-accent-400 dark:hover:bg-primary-600 group cursor-pointer transition-colors text-sm">
                        <input
                            type="radio"
                            name="status"
                            value="{{ $index }}"
                            @click="toggleFilterTerm('status', '{{ $index }}')"
                            x-model="store.search.filters.terms.status"
                            class="sr-only"
                        >
                        <span>{{ $status['label'] }}</span>
                    </label>
                @endforeach
            </div>
        </menu>
    @endif
</form>