@extends('braid::layouts.default')

@section('main')
    <div
        x-data="patternLibrary"
        class="grid grid-rows-[50px_1fr] grid-cols-[250px_minmax(900px,_1fr)] h-[100vh]"
    >
        <header class="bg-slate-300 flex items-center px-2">
            <h1 class="text-2xl font-semibold">Pattern Library</h1>
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

        <menu class="bg-slate-100 h-full overflow-auto">
        {{-- <menu class="bg-slate-100 border-r-[6px] border-transparent hover:border-indigo-400"> --}}
            @include('braid::partials.menu', [
                'dir' => $patternFiles
            ])
        </menu>

        <iframe :src="activePattern.url" class="w-full h-full overflow-auto"></iframe>
    </div>
@endsection