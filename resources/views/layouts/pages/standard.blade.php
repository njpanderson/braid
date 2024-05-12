<!DOCTYPE html>
<html lang="en">
<head>
    @include('braid::partials.head')

    <title>@yield('title', config('braid.title'))</title>

    {{
        Vite::useHotFile(public_path() . '/' . config('braid.vendor_path') . '/hot')
            ->useBuildDirectory(config('braid.vendor_path') . '/build')
    }}

    @vite('resources/css/braid.scss')
</head>
<body class="min-h-[100vh] theme-{{ config('braid.theme.colour') }} font-lato">
    <main class="min-h-[100vh]">
        @yield('main')
    </main>

    <script>
        const events = [
            'braidcanvasresize'
        ].map((eventName) => {
            const event = new Event(eventName);
            return event;
        });

        window.addEventListener('resize', () => {
            window.parent.dispatchEvent(events[0]);
        });
    </script>
</body>
</html>