@extends('braid::layouts.pattern')

@section('pattern')
    <div class="p-2">
        @if (isset($view))
            {!! $view !!}
        @elseif (isset($componentView))
            @if ($componentView->type == 'component')
                <x-dynamic-component
                    :component="$componentView->name"
                    :attributes="$context->getAttributes()"
                >
                    @foreach($context->getScopedSlots() as $slotName => $slot)
                        {{-- TODO: This works! But it needs to use the slot's attributes, not the whole Pattern context --}}
                        @slot($slotName, null, $slot->getAttributesArray())
                            {!! $slot->getSlot() !!}
                        @endslot
                    @endforeach

                    {!! $context->getSlot() !!}
                </x-dynamic-component>
            @elseif ($componentView->type == 'livewire')
                @livewire(
                    $componentView->name,
                    $context->getAttributesArray()
                )
            @else
                @include($componentView->name, $context->getAttributesArray())
            @endif
        @endif
    </div>

    @if (isset($patternMapId))
        <script>
            const events = [
                'braidpatternloaded',
                'braidpatternunloaded',
                'braidcanvasresize'
            ].map((eventName) => {
                const event = new Event(eventName);
                event.detail = { patternMapId: '{{ $patternMapId ?? '' }}' };
                return event;
            });

            window.parent.dispatchEvent(events[0]);

            window.addEventListener('unload', () => {
                window.parent.dispatchEvent(events[1]);
            });

            window.addEventListener('resize', () => {
                window.parent.dispatchEvent(events[2]);
            });
        </script>
    @endif
@endsection