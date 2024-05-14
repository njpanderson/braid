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
        x-on:braidpatternloaded.window="onPatternLoaded"
        x-on:braidpatternunloaded.window="onPatternUnLoaded"
        x-on:braidcanvasresize.window.throttle.50ms="onCanvasResize"
        class="h-[100vh] bg-gradient-to-b from-primary-300 to-primary-400 dark:from-primary-600 dark:to-primary-700 dark:text-white"
    >
        <section class="grid h-full transition-all"
             :class="{
                'grid-cols-[250px_minmax(900px,_1fr)]': store.menuOpen,
                'grid-cols-[10px_minmax(900px,_1fr)]': !store.menuOpen,
            }"
        >
            <div
                id="braid-menu"
                class="grid grid-rows-[50px_1fr] overflow-hidden relative transition-opacity select-none"
                :class="{
                    'opacity-0': !store.menuOpen,
                    'opacity-100': store.menuOpen,
                }"
            >
                <header class="flex items-center">
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
                        @click="store.menuOpen = !store.menuOpen"
                    >
                        @svg('heroicon-o-arrow-left-start-on-rectangle', 'w-6 h-6')
                        <span class="sr-only">Close menu</span>
                    </button>
                </header>

                <menu
                    class="h-full"
                    :class="{
                        'overflow-y-auto': store.menuOpen,
                        'overflow-hidden': !store.menuOpen,
                    }"
                >
                    @include('braid::partials.menu', [
                        'dir' => $patternFiles
                    ])
                </menu>
            </div>

            <div
                id="braid-content"
                class="relative grid shadow-frame overflow-hidden bg-white dark:bg-neutral-800"
                :class="{
                    'grid-rows-[50px_20px_1fr]': activePattern.id && store.ruler.open,
                    'grid-rows-[50px_1fr]': !activePattern.id || !store.ruler.open
                }"
            >
                @include('braid::partials.toolbar')

                <x-braid::elements.ruler/>

                <div
                    x-ref="patternCanvas"
                    class="grid overflow-hidden bg-primary-100 dark:bg-neutral-700"
                    data-draggable-direction="vertical"
                    data-draggable-template="1fr minmax(0px, <value>)"
                    data-draggable-initial="240"
                    data-draggable-min="40"
                >
                    <div class="w-full h-full overflow-x-auto">
                        <div
                            x-ref="patternCanvasOuter"
                            class="w-full h-full resize-x border-[3px] border-accent-100 dark:border-accent-400 hover:border-accent-200 dark:hover:border-accent-300 overflow-hidden"
                        >
                            <iframe
                                src="about:blank"
                                :src="activePattern.url"
                                class="w-full h-full overflow-auto bg-white"
                                x-ref="patternCanvasFrame"
                            ></iframe>
                        </div>
                    </div>

                    <div x-show="loadedPattern">
                        @include('braid::patterntools.index')
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection