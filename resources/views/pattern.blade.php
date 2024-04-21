@if (isset($pattern))
    @include('braid::shell', [
        'pattern' => $pattern
    ])
@elseif (isset($componentView))
    @if(View::exists($componentView->fullName))
        @include('braid::shell', [
            'componentView' => $componentView,
            'attributes' => $attributes,
            'slotContent' => $slotContent
        ])
    @else
        @include('braid::error', [
            'patternClass' => $patternClass,
            'error' => new njpanderson\Braid\Exceptions\MissingViewException(
                $componentView->name
            )
        ])
    @endif
@endif