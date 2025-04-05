<ul class="px-2">
    <template x-for="result in await getSearchResults()" :key="result.id">
        <li class="mb-1">
            <button
                class="block w-full rounded-md px-2 py-0.5 hover:bg-accent-500 dark:hover:bg-accent-600 text-left leading-tight"
                :class="{
                    'bg-accent-400': activePattern.id == result.id
                }"
                @click="switchPattern(result.id)"
            >
                <span>
                    <b class="block font-medium" x-text="getSearchLabel(result)"></b>
                    <span class="block text-sm" x-text="getPatternSearchPath(result)"></span>
                </span>
            </button>
        </li>
    </template>

    <template x-if="!(await getSearchResults()).length">
        <li>(No items)</li>
    </template>
</ul>
