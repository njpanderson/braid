@extends('braid::layouts.pages.standard')

@section('main')
    <div class="flex min-h-[100vh] items-center justify-center dark:bg-neutral-800">
        <div class="pl-prose dark:prose-invert">
            <h1 class="">Welcome to Braid</h1>
            <p>Braid is a pattern library manager for Laravel.</p>
            <p>Its primary goal is to enable views of your Laravel & Livewire components in isolation in order to catalogue, manage and understand the design of a project.</p>
            <p>Get started with the <a href="#">documentation</a>.</p>
            <p><b>Note:</b> You can replace this welcome page by creating a template at <code class="text-nowrap">views/vendor/braid/welcome.blade.php</code>.</p>
        </div>
    </div>
@endsection