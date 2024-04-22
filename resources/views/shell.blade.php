@extends('braid::layouts.pattern')

@section('pattern')
    <div class="p-2">
        @if (isset($pattern))
            {!! $pattern !!}
        @elseif (isset($componentView))
            @if (in_array($componentView->type, ['component', 'livewire']))
                <x-dynamic-component
                    :component="$componentView->name"
                    :attributes="$attributes"
                >
                    {!! $slotContent !!}
                </x-dynamic-component>
            @else
                @include($componentView->name, $attributes)
            @endif
        @endif
    </div>

    <script>
        const event = new Event('braidpatternloaded');
        event.detail = { patternMapId: '{{ $patternMapId ?? '' }}' }
        window.parent.dispatchEvent(event)
    </script>
@endsection