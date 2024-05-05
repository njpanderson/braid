<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Braid Pattern Library</title>

    {{
        Vite::useHotFile(public_path() . '/' . config('braid.vendor_path') . '/hot')
            ->useBuildDirectory(config('braid.vendor_path') . '/build')
    }}

    @vite('resources/css/braid.css')
</head>
<body class="min-h-[100vh] theme-{{ config('braid.theme.colour') }} font-lato">
    <main class="min-h-[100vh]">
        @yield('main')
    </main>

    @vite('resources/js/braid.js')
</body>
</html>