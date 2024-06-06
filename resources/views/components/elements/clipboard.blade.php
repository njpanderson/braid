<button
    type="button"
    {{ $attributes->class([
        'transition-all rounded-sm'
    ]) }}
    data-tooltip="Copy to clipboard"
    data-clip="{{ $clip }}"
    {{ $attributes }}
>
    <x-heroicon-s-clipboard-document-check class="w-4 fill-neutral-500 hover:fill-accent-600" title="Copy to clipboard"/>
</button>
