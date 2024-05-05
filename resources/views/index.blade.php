@extends('braid::layouts.default')

@section('main')
    <div
        x-data="patternLibrary"
        x-on:braidpatternloaded.window="onPatternLoaded"
        x-on:braidpatternunloaded.window="onPatternUnLoaded"
        {{-- class="h-[100vh] p-2 {{ $braid->getColours('primary', 'bg') }}" --}}
        class="h-[100vh] bg-primary-300 dark:bg-primary-600 dark:text-white"
    >
        <section class="grid h-full transition-all"
             :class="{
                'grid-cols-[250px_minmax(900px,_1fr)]': uiState.menuOpen,
                'grid-cols-[10px_minmax(900px,_1fr)]': !uiState.menuOpen,
            }"
        >
            <div
                class="grid grid-rows-[50px_1fr] overflow-hidden relative transition-opacity"
                :class="{
                    'opacity-0': !uiState.menuOpen,
                    'opacity-100': uiState.menuOpen,
                }"
            >
                <header class="flex items-center">
                    <h1
                        class="px-2 text-2xl font-bold whitespace-nowrap text-primary-900 dark:text-primary-200"
                    >Pattern Library</h1>

                    <button
                        class="ml-auto mr-2 p-1 hover:bg-slate-200/50 rounded"
                        @click="uiState.menuOpen = !uiState.menuOpen"
                    >
                        @svg('heroicon-o-arrow-left-start-on-rectangle', 'w-6 h-6')
                        <span class="sr-only">Close menu</span>
                    </button>
                </header>

                <menu
                    class="h-full"
                    :class="{
                        'overflow-y-auto': uiState.menuOpen,
                        'overflow-hidden': !uiState.menuOpen,
                    }"
                >
                    @include('braid::partials.menu', [
                        'dir' => $patternFiles
                    ])
                </menu>
            </div>

            <div class="grid grid-rows-[50px_1fr] rounded-l-[15px] shadow-frame overflow-hidden bg-white dark:bg-neutral-800">
                @include('braid::partials.toolbar')

                <div
                    x-ref="patternCanvas"
                    class="grid overflow-hidden"
                    data-draggable-direction="vertical"
                    data-draggable-template="1fr minmax(0px, <value>)"
                    data-draggable-initial="240"
                    data-draggable-min="40"
                    data-draggable-max="400"
                >
                    <iframe
                        :src="activePattern.url"
                        class="w-full h-full overflow-auto bg-white"
                        x-ref="patternCanvasFrame"
                    ></iframe>

                    <div x-show="loadedPattern">
                        @include('braid::patterntools.index')
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection