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
		{{ $attributes }}
	>
		{{ $value }}
	</textarea>
	@if ($expanding ?? false)
		<span data-proxy x-text="{{ ($xModel ?? '') }} + ' '"></span>
	@endif
</div>