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