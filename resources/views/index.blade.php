@extends('braid::layouts.default')

@section('head')
    {{-- This is a configuration payload from the braid Laravel config --}}
    <script>
        var BRAID = {
            config: {
                'theme': { colour: '{{ config('braid.theme.colour') }}' },
                'response_sizes': {!! collect(config('braid.response_sizes'))->toJson() !!}
            }
        }
    </script>
@endsection

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
        data-draggable-rows-initial="250"
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
            <header class="flex items-center h-[50px]">
                <h1
                    class="px-2 text-2xl font-bold whitespace-nowrap text-primary-900 dark:text-primary-200"
                >
                    <button
                        @click="switchPattern('__braid.welcome')"
                        class="hover:underline underline-offset-2"
                    >
                        {{ config('braid.title') }}
                    </button>
                </h1>

                <button
                    class="ml-auto mr-2 p-1 hover:bg-slate-200/50 rounded"
                    data-tooltip="Close menu"
                    @click="store.menuOpen = !store.menuOpen"
                >
                    @svg('heroicon-o-arrow-left-start-on-rectangle', 'w-6 h-6')
                    <span class="sr-only">Close menu</span>
                </button>
            </header>

            <menu
                class="h-full w-full flex-1"
                @scroll="onMenuScroll"
                :class="{
                    'overflow-y-auto': store.menuOpen,
                    'overflow-hidden': !store.menuOpen,
                    'border-t-2 border-t-primary-200/40': store.menuScrolled
                }"
            >
                @include('braid::partials.menu', [
                    'dir' => $patternFiles
                ])

                <button
                    x-show="store.menuOpen"
                    data-draggable-handle="patternLibrary"
                    data-draggable-type="cols"
                    class="absolute top-0 right-0 bottom-0 w-[6px] bg-neutral-300/50 dark:bg-neutral-500/50 cursor-ew-resize flex items-center justify-center hover:bg-accent-300 dark:hover:bg-accent-600"
                    title="Resize menu"
                ><span class="h-[20px] bg-neutral-600 dark:bg-neutral-100 w-[1px]"></span></button>
            </menu>
        </div>

        <div
            id="braid-content"
            class="braid-content flex flex-col relative h-full w-full overflow-hidden bg-white dark:bg-neutral-800"
        >
            @include('braid::partials.toolbar')

            <div x-ref="patternCanvas" class="flex flex-col flex-1 min-h-0 max-w-full relative overflow-x-auto">
                <x-braid::elements.ruler/>

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