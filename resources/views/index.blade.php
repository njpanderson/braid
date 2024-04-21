@extends('braid::layouts.default')

@section('main')
    <div x-data="patternLibrary" class="grid grid-cols-[250px_minmax(900px,_1fr)] h-[100vh]">
        <menu class="bg-slate-100">
        {{-- <menu class="bg-slate-100 border-r-[6px] border-transparent hover:border-indigo-400"> --}}
            @include('braid::partials.menu', [
                'dir' => $patternFiles
            ])
        </menu>

        <div class="grid grid-rows-[50px_1fr]">
            <div class="bg-slate-200 flex items-center px-2">
                <template x-if="!activePattern.id">
                    <h1 class="text-2xl">Pattern Library</h1>
                </template>
                <template x-if="activePattern.id">
                    <h1 x-text="activePattern.label"></h1>
                </template>
            </div>

            <iframe :src="activePattern.url" class="w-full h-full"></iframe>
        </div>
    </div>
@endsection