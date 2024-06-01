@extends('braid::layouts.pattern')

@section('pattern')
    <div style="padding: {{ config('braid.pattern_margin') }}">
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

    @include('braid::partials.framescripts')
@endsection