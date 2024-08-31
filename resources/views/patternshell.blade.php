@extends('braid::layouts.pattern')

@php
\njpanderson\Braid\Braid::active();
@endphp

@section('pattern')
    <div style="padding: {{ (int) config('braid.pattern_margin') }}px">
        @if (isset($view))
            {!! $view !!}
        @elseif (isset($componentView))
            @if ($componentView->type == 'component')
                <x-dynamic-component
                    :component="$componentView->name"
                    :attributes="$context->getAttributes()"
                >
                    @foreach($context->getScopedSlots() as $slotName => $slot)
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
