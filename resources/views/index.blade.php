@extends('braid::layouts.default')

@section('main')
    <div
        x-data="patternLibrary"
        x-on:braidframeloaded.window="onFrameLoaded"
        x-on:braidframeunloaded.window="onFrameUnLoaded"
        x-on:braidcanvasresize.window.throttle.50ms="onCanvasResize"
        class="braid-app h-[100dvh] bg-gradient-to-b from-primary-300 to-primary-400 dark:from-primary-600 dark:to-primary-700 dark:text-white"
        :class="{
            'grid-cols-[250px_minmax(900px,_1fr)]': store.menuOpen,
            'grid-cols-[10px_minmax(900px,_1fr)]': !store.menuOpen,
            'grid-rows-[1fr_200px]': loadedPattern,
            'grid-rows-[1fr_0]': !loadedPattern,
        }"
        data-draggable="patternLibrary"
        data-draggable-cols-initial="240"
        data-draggable-rows-initial="300"
        data-draggable-handle-size="6"
        data-draggable-cols-max="350"
        data-draggable-cols-min="200"
        :data-draggable-template-cols="(store.menuOpen ? '<value> 1fr' : '10px 1fr')"
        :data-draggable-template-rows="(!!loadedPattern ? '1fr <value>' : '1fr 0')"
    >
        <div
            id="braid-menu"
            class="braid-menu flex flex-col overflow-hidden relative transition-opacity select-none border-r border-r-neutral-400"
            :class="{
                'opacity-0 pointer-events-none': !store.menuOpen,
                'opacity-100': store.menuOpen,
            }"
        >
            <header class="flex items-start min-h-[50px]">
                <h1
                    class="overflow-auto p-2 text-2xl font-bold self-start text-primary-900 dark:text-primary-200"
                >
                    <button
                        @click="switchPattern('__braid.welcome')"
                        class="text-left hover:underline underline-offset-2 break-words hyphens-auto max-w-full"
                    >
                        {{ config('braid.title') }}
                    </button>
                </h1>

                <button
                    class="shrink-0 ml-auto mr-2 p-1 mt-2 hover:bg-slate-200/50 rounded"
                    data-tooltip="Close menu"
                    @click="store.menuOpen = !store.menuOpen"
                >
                    @svg('heroicon-o-arrow-left-start-on-rectangle', 'w-6 h-6')
                    <span class="sr-only">Close menu</span>
                </button>
            </header>

            <form
                class="mb-2 px-2"
                @submit="onSearchSubmit"
            >
                <div class="flex rounded-sm border-2 border-primary-200/40 focus-within:border-accent-300 bg-neutral-50 dark:bg-neutral-700">
                    <input
                        type="text"
                        placeholder="Find patterns"
                        x-model.debounce.150ms="store.search.term"
                        @keyup.esc="onSearchClose"
                        class="p-1 text-sm flex-grow appearance-none bg-transparent focus-visible:outline-none min-w-0">

                    <button
                        type="submit"
                        class="flex shrink-0 items-center justify-center w-[30px] group"
                        x-show="!store.search.open"
                    >
                        <x-heroicon-s-magnifying-glass class="w-4 h-4 group-hover:stroke-accent-300"/>
                    </button>

                    <button
                        type="button"
                        class="flex shrink-0 items-center justify-center w-[30px] group"
                        x-show="store.search.open"
                        @click="onSearchClose"
                    >
                        <x-heroicon-s-x-mark class="w-4 h-4 group-hover:stroke-accent-300"/>
                    </button>
                </div>
            </form>

            <menu
                class="h-full w-full flex-1"
                @scroll="onMenuScroll"
                :class="{
                    'overflow-y-auto': store.menuOpen,
                    'overflow-hidden': !store.menuOpen,
                    'border-t-2 border-t-primary-200/40': store.menuScrolled
                }"
            >
                <template x-if="!store.search.open">
                    @include('braid::partials.menu', [
                        'dir' => $patternFiles
                    ])
                </template>

                <template x-if="store.search.open">
                    @include('braid::partials.search')
                </template>

                <button
                    x-show="store.menuOpen"
                    data-draggable-handle="patternLibrary"
                    data-draggable-type="cols"
                    class="absolute top-0 right-0 bottom-0 w-[6px] opacity-0 hover:opacity-100 bg-accent-300 dark:bg-accent-600 cursor-ew-resize flex items-center justify-center"
                    title="Resize menu"
                ><span class="h-[20px] bg-neutral-600 dark:bg-neutral-100 w-[1px]"></span></button>
            </menu>
        </div>

        <div
            id="braid-content"
            class="braid-content flex flex-col relative h-full w-full overflow-hidden bg-white dark:bg-neutral-800"
        >
            @include('braid::partials.toolbar')

            <x-braid::elements.ruler/>

            <div x-ref="patternCanvas" class="flex flex-col flex-1 min-h-0 max-w-full relative overflow-x-auto bg-accent-100 dark:bg-neutral-700">
                <div
                    x-ref="patternCanvasOuter"
                    class="relative flex-1 w-full h-full resize-x border-[3px] border-accent-100 dark:border-accent-400 hover:border-accent-200 dark:hover:border-accent-300 overflow-auto"
                >
                    <iframe
                        src="about:blank"
                        class="z-0 w-full h-full bg-white"
                        x-ref="patternCanvasFrame"
                    ></iframe>
                </div>
            </div>
        </div>

        <div x-show="loadedPattern" class="braid-tools overflow-hidden">
            @include('braid::patterntools.index')
        </div>
    </div>
@endsection