```twig
{# /resources/views/components/button.blade.php #}
{% raw %}<button
    {{ $attributes->class([
        "border rounded-md border-sky-400 shadow-md ..."
    ]) }}
>
    {{ $slot }}
</button>{% endraw %}
```