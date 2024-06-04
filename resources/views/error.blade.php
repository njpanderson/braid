@extends('braid::layouts.pages.standard')

@section('main')
    <div class="flex min-h-[100vh] items-center justify-center dark:bg-neutral-800">
        <div class="pl-prose dark:prose-invert">
            <h1 class="text-3xl flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-12 mt-1 aspect-square pr-2 text-orange-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>Whoops!</h1>

            @if (!empty($braid->getPatternClassFromRoute()))
                <p>
                    There was an error in the Braid pattern
                    <span class="bg-blue-600 text-white inline-block px-2 rounded-full">{{ $braid->getPatternClassFromRoute() }}</span>.
                </p>
            @else
                <p>
                    There was an error.
                </p>
            @endif

            @if ($error instanceof njpanderson\Braid\Exceptions\MissingViewException)
                <p>The view <code>{{ $error->viewName }}</code> for this pattern could not be found.</p>

                <x-braid::elements.note>
                    <p><b>Note:</b> if the pattern’s view is in a non-standard location, you can customise it with the following code in your pattern class:</p>
                    <pre class="">/**
 * Name of the view, overrides view resolution.
 *
 * @var string
 */
protected string $viewName = 'name.of.view';</pre>
                </x-braid::elements.note>
            @elseif ($error instanceof njpanderson\Braid\Exceptions\SlotAttributeTypeException)
                <p class="my-2">{{ $error->getMessage() }}</p>

                <x-braid::elements.note>
                    <p>The slot attribute <b>{{ $error->attrName }}</b> may be of an unexpected type. Braid supplied <a href="https://njpanderson.github.io/braid/docs/contexts/context-data/#defining-context-data" target="_blank">Attributes</a> require data that can resolve to a string.</p>
                </x-braid::elements.note>
            @else
                <p class="my-2">{{ $error->getMessage() }}</p>
            @endif

            @if ($showDevErrorSuggestions ?? false)
                <p class="text-sm italic">(Not enough detail? You can show full errors with the Braid config <code>exceptions</code> value.)</p>
            @endif
        </div>
    </div>
@endsection