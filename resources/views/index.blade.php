@extends('braid::layouts.default')

@section('main')
    <div
        x-data="patternLibrary"
        x-on:braidpatternloaded.window="onPatternLoaded"
        class="grid h-[100vh] transition-all"
        :class="{
            'grid-cols-[250px_minmax(900px,_1fr)]': uiState.menuOpen,
            'grid-cols-[14px_minmax(900px,_1fr)]': !uiState.menuOpen,
            'grid-rows-[50px_1fr_minmax(0,200px)]': loadedPattern,
            'grid-rows-[50px_1fr_0]': !loadedPattern
        }"
    >
        <header
            class="bg-slate-100 flex items-center px-2 border-r-4 overflow-hidden transition-all"
        >
            <h1
                class="text-2xl font-medium whitespace-nowrap"
                :class="{
                    'opacity-0': !uiState.menuOpen,
                    'opacity-100': uiState.menuOpen
                }"
            >Pattern Library</h1>
        </header>

        <div class="bg-slate-200 flex items-center px-2">
            <template x-if="activePattern.id">
                <h1 class="flex gap-1">
                    @svg('heroicon-o-document', 'w-6 h-6')
                    <span x-text="activePattern.label"></span>
                    <span x-show="activePattern.context">
                        <b>&nbsp;/&nbsp;</b>
                        <span x-text="activePattern.context"></span>
                    </span>
                </h1>
            </template>
        </div>

        <menu
            class="relative bg-slate-100 h-full row-span-2 border-r-4"
            :class="{
                'overflow-y-auto': uiState.menuOpen,
                'overflow-hidden': !uiState.menuOpen,
            }"
        >
            @include('braid::partials.menu', [
                'dir' => $patternFiles
            ])
            <button
                class="absolute right-0 top-0 bottom-0 w-[10px] flex items-center justify-center hover:bg-slate-200/50 group"
                @click="uiState.menuOpen = !uiState.menuOpen"
            >
                <span class="sr-only">Resize menu</span>
                <span class="w-[2px] h-[20px] bg-slate-300 group-hover:bg-slate-400 rounded mr-[2px]"></span>
                <span class="w-[2px] h-[20px] bg-slate-300 group-hover:bg-slate-400 rounded"></span>
            </button>
        </menu>

        <iframe :src="activePattern.url" class="w-full h-full overflow-auto"></iframe>

        <div
            class="bg-slate-100 border-t-4"
            x-show="loadedPattern"
        >
            <template x-if="loadedPattern">
                <div class="flex flex-col h-full">
                    <menu class="px-1 pt-1 border-b bg-white">
                        <ul
                            role="tablist"
                            class="flex gap-1"
                        >
                            <li><a href="#tab-info" class="block px-2 py-1 text-sm border-l border-t border-r rounded-t bg-slate-50 relative bottom-[-1px] z-10">Info</a></li>
                            <li><a href="#tab-info" class="block px-2 py-1 text-sm border-l border-t border-r rounded-t border-transparent bg-slate-100">Context</a></li>
                            <li><a href="#tab-info" class="block px-2 py-1 text-sm border-l border-t border-r rounded-t border-transparent bg-slate-100">Code</a></li>
                            <li><a href="#tab-info" class="block px-2 py-1 text-sm border-l border-t border-r rounded-t border-transparent bg-slate-100">Output</a></li>
                        </ul>
                    </menu>

                    <div id="tab-info" class="p-2 bg-slate-50 basis-full z-0" role="tab">
                        <ul>
                            <li>Pattern ID: <span x-text="loadedPattern.id"></span></li>
                        </ul>
                    </div>
                </div>
            </template>
        </div>
    </div>
@endsection