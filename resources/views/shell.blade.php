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

    @if (isset($patternMapId))
        <script>
            const patternloaded = new Event('braidpatternloaded');
            patternloaded.detail = { patternMapId: '{{ $patternMapId ?? '' }}' }

            window.parent.dispatchEvent(patternloaded);

            const patternunloaded = new Event('braidpatternunloaded');
            patternunloaded.detail = { patternMapId: '{{ $patternMapId ?? '' }}' }

            window.addEventListener('unload', function() {
                window.parent.dispatchEvent(patternunloaded);
            });
        </script>
    @endif
@endsection