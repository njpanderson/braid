<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Braid Pattern Library</title>

    <link href="{{ asset(mix('braid.css', 'vendor/braid')) }}" rel="stylesheet" type="text/css">
</head>
<body>
    <main>
        @yield('main')
    </main>

    <script src="{{ asset(mix('braid.js', 'vendor/braid')) }}"></script>
</body>
</html>