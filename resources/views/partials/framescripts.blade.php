<script
    src="{{ asset(config('braid.vendor_path') . '/frame.js') }}"
    {{-- These data attributes are read by frame.js --}}
    data-pattern-map-id="{{ $patternMapId ?? '' }}"
    {{-- data-index-route="{!! route('braid.index', ['pattern' => $patternMapId ?? '']) !!}" --}}
></script>
