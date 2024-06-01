```twig
{# /resources/views/components/card.blade.php #}
{% raw %}@props(['title', 'image', 'link', 'link-text' ])

<div
    {{ $attributes->class([
        'w-full group mx-auto shadow-lg rounded border hover:border-blue-400 bg-slate-100 hover:bg-blue-100'
    ])}}
    {{ $attributes }}
>
    @if (isset($image))
        <picture class="w-full hidden sm:block">
            <source srcset="{{ $image }}"/>
            <img class="w-full h-[150px] object-cover opacity-80 group-hover:opacity-100" src="{{ $image }}"/>
        </picture>
    @endif

    <h2 class="pt-4 px-4 font-semibold text-lg">
        <a href="#" class="group-hover:text-blue-600">{{ $title }}</a>
    </h2>

    <div class="px-4 pb-4">
        {!! $slot !!}

        @if (isset($link))
            <p class="mt-2 flex gap-x-2 items-center justify-end">
                <a href="{{ $link }}" class="hover:underline">{{ $linkText ?? $title }}</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </p>
        @endif
    </div>
</div>{% endraw %}
```