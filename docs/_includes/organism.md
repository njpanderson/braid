```twig
{% raw %}{{-- /resources/views/patterns/cards/grid.blade.php --}}{% endraw %}
<div>
    <h2 class="text-xl mb-4">Grid of cards</h2>

    <div class="grid grid-cols-3 gap-4">
        <x:cards.card
            title="Card 1"
            image="https://picsum.photos/600/150"
        >
            <p>Quisquam incidunt aut vero cupiditate. Accusantium id veritatis veritatis.</p>
        </x:cards.card>

        <x:cards.card
            title="Card 2"
            image="https://picsum.photos/600/150"
        >
            <p>Necessitatibus et voluptatum autem.</p>
        </x:cards.card>

        <x:cards.card
            title="Card 3"
            image="https://picsum.photos/600/150"
        >
            <p>Quis id facere corrupti et incidunt molestiae vel ducimus enim.</p>
        </x:cards.card>
    </div>
</div>
```
