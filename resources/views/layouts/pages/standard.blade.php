<!DOCTYPE html>
<html lang="en">
<head>
    <title>@yield('title', config('braid.title'))</title>

    @include('braid::partials.head')

    {{
        Vite::useHotFile(public_path() . '/' . config('braid.vendor_path') . '/hot')
            ->useBuildDirectory(config('braid.vendor_path') . '/build')
    }}

    @section('head')
    @show

    @vite('resources/css/braid.scss')
</head>
<body class="min-h-[100vh] theme-{{ config('braid.theme.colour') }} font-lato">
    <main class="min-h-[100vh]">
        @yield('main')
    </main>

    @include('braid::partials.framescripts')
</body>
</html>
