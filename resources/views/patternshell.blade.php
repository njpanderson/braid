@extends('braid::layouts.pattern')

@section('pattern')
    <div class="p-2">
        @if (isset($view))
            {!! $view !!}
        @elseif (isset($componentView))
            @if (in_array($componentView->type, ['component', 'livewire']))
                <x-dynamic-component
                    :component="$componentView->name"
                    :attributes="$context->getAttributes()"
                >
                    @foreach($context->getScopedSlots() as $slotName => $slotValue)
                        <x-slot :name="$slotName">{!! $slotValue !!}</x-slot>
                    @endforeach

                    {!! $context->getSlot() !!}
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