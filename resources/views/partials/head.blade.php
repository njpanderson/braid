<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

{{-- This is a configuration payload from the braid Laravel config --}}
<script>
    var BRAID = {
        config: {
            title: '{{ config('braid.title') }}',
            path: '{{ trim(config('braid.path'), '\/') }}',
            statuses: {!! $braidHtml->getStatusesJS() !!},
            theme: { colour: '{{ config('braid.theme.colour') }}' },
            response_sizes: {!! collect(config('braid.response_sizes'))->toJson() !!}
        },
        darkMode: '{{ $braidHtml->getDarkModeJS() }}'
    }
</script>
