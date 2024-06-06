@if (isset($view))
    @include('braid::patternshell', [
        'view' => $view
    ])
@elseif (isset($componentView))
    @if(View::exists($componentView->fullName))
        @include('braid::patternshell', [
            'componentView' => $componentView,
            'context' => $context
        ])
    @else
        @include('braid::error', [
            'error' => new njpanderson\Braid\Exceptions\MissingViewException(
                $componentView->name
            )
        ])
    @endif
@endif
