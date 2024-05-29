<select
	@if ($value && isset($xModel))
		x-init="{{ $xModel }} = '{{ $value }}'"
	@endif
	{{ $attributes->class([
		'py-0.5 px-1.5 rounded border border-neutral-400 bg-neutral-50 dark:bg-neutral-900'
	]) }}
>
	@foreach($options as $option)
		<option value="{{ $option['id'] }}">{{ $option['label'] }}</option>
	@endforeach
</select>