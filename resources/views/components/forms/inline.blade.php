@props([
	'method',
	'action'
])

<form
	x-data="inlineForm"
	method="post"
	action="{{ $action ?? '/' }}"
	@change.throttle="onFieldChange"
	{{ $attributes }}
>
	{{ $slot }}
</form>