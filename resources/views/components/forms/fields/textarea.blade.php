@props([
	'expanding',
	'value'
])

<div
	@if ($expanding ?? false)
		class="expanding-textarea"
	@endif
>
	<textarea
		x-ref="{{ $xModel }}"
		@keyup.throttle.500="onFieldChange"
		@if ($value && isset($xModel))
			x-init="{{ $xModel }} = $refs['{{ $xModel }}'].value.trim()"
		@endif
		{{ $attributes->class([
			'rounded border border-neutral-400 bg-neutral-50 dark:bg-neutral-900'
		]) }}
	>
		{{ $value }}
	</textarea>
	@if ($expanding ?? false)
		<span data-proxy x-text="{{ ($xModel ?? '') }} + ' '"></span>
	@endif
</div>