@extends('braid::layouts.pages.standard')

@section('main')
    <div class="flex min-h-[100vh] items-center justify-center dark:bg-neutral-800 dark:text-white">
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl">Welcome to Braid</h1>

            <p>Braid is a pattern library manager for Laravel &amp; Livewire projects.</p>

            <p>Get started with the 🚀 <a href="https://njpanderson.github.io/braid/quick-start.html" target="_blank">quick start</a>, or dive into the 📖 <a href="https://njpanderson.github.io/braid/" target="_blank">full documentation</a>.</p>

            <x-braid::elements.note>
                <p>You can replace this welcome page by creating a template at <code class="text-nowrap">views/vendor/braid/welcome.blade.php</code>.</p>
            </x-braid::elements.note>
        </div>
    </div>
@endsection
