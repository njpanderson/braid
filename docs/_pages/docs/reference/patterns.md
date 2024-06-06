---
layout: single
title: Patterns
permalink: /docs/reference/patterns/
toc: true
---

Patterns ultimately inherit from the base `njpanderson\Braid\Base\Pattern` class, which provides the following properties and methods.

## Properties

### `contexts`

Contexts, explained in detail on the [Context data](/braid/docs/contexts/context-data/) page, define the various views by which a pattern can be tested.

This property defines the names of those contexts for the purposes of menu generation:

```php
    /**
     * Pattern contexts
     *
     * @var array
     */
    protected $contexts = [];
```

### `label`

Patterns will show a label derived from their class name. You can override it with this property:

```php
    /**
     * Pattern label as used in the menu.
     *
     * @var string
     */
    protected string $label = '';
```

### `viewName`

The view name dictates which component view should be loaded when the pattern is accessed. By default, this is inferred from the [namespace of your pattern](/braid/docs/your-first-pattern/). Use this property to change the view location if needed:

```php
    /**
     * Name of the view, overrides view resolution.
     *
     * @var string
     */
    protected string $viewName = '';
```

### `icon`

Each pattern defines a single icon for use within the menu. This can be customised here. Braid uses [Heroicon’s](https://heroicons.com/outline) "outline" group to define icons. For example, if you wanted to use the <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" /></svg> `document-check` icon, use that string exactly as the `$icon` value:

```php
    /**
     * The icon of the pattern.
     *
     * @var string
     * @see https://heroicons.com/
     */
    protected string $icon = 'document';
```

## Required Methods
The following methods are required to be defined on your pattern classes.

### `contextData`

The `contextData` method on your pattern definition  is called by Braid whenever the pattern is viewed. It will send a single `string $context` argument and expects an instance of either `njpanderson\Braid\Contracts\PatternContext` or `Illuminate\Contracts\View\View` to be returned:

```php
public function contextData(string $context): PatternContext|View
{
    switch ($context) {
    case 'no-image':
        return $this->makeContext(
            attributes: [
                'title' => 'About us',
                'link' => '/about-us'
            ],
            slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
        );

    case 'no-link':
        return $this->makeContext(
            attributes: [
                'image' => 'https://picsum.photos/600/150',
                'title' => 'About us'
            ],
            slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
        );

    default:
        return $this->makeContext(
            attributes: [
                'image' => 'https://picsum.photos/600/150',
                'title' => 'About us',
                'link' => '/about-us'
            ],
            slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
        );
    }
}
```

#### arguments

argument | type | description
-- | -- | --
`$context` | `string` | The context name being accessed. Will be `default` if either the default context is requested, or no contexts exist (see [`contexts`](#contexts)).

#### returns

- `njpanderson\Braid\Contracts\PatternContext`
- `Illuminate\Contracts\View\View`

## Overridable methods
The following methods can be overridden within your pattern classes and are called by Braid throughout the pattern’s lifecycle.

### `getLabel`
Returns the pattern’s label. A function alternative to defining the `$label` property.

#### returns

 - `string` - The label as displayed within Braid.

```php
    /**
     * Get the pattern's label
     *
     * @return string
     */
    public function getLabel(): string
    {
        // return 'Label';
    }
```

### `getIcon`
Returns the pattern’s icon name. A function alternative to defining the `$icon` property.

See [`$icon`](#icon) for information on icon references.

```php
    /**
     * Return the pattern's icon.
     *
     * @return string
     */
    public function getIcon(): string
    {
        // return 'document';
    }
```

## Callable methods
The following methods can be called from within your pattern classes.

### `makeContext`

This method can be used to create an instance of `njpanderson\Braid\Dictionaries\PatternContext` which, other than `View` instances, is the expected return type from `contextData` calls in your patterns.

```php
$this->makeContext(
    attributes: [
        'class' => 'bg-red-500',
        'foo' => ['bar', 'baz']
    ],
    slot: 'Consequat vulputate porttitor a senectus fermentum.',
    scopedSlots: [
        'slot1' => $this->makeScopedSlot(
            slot: 'Ut repellat nisi hic nobis beatae quis nobis.',
            attributes: [
                'class' => 'bg-yellow-300 min-w-[2000px]'
            ]
        ),
        'slot2' => $this->makeScopedSlot(
            // ...
        ),
        // ...
    ]
);
```

#### arguments

argument | type | description
-- | -- | --
`$attributes` | `array` | An array of key/value pairs defining attributes and their values. In the case of Laravel or Livewire components, these attributes are sent as html-like attributes to the component as it is called. In Laravel [subviews](https://laravel.com/docs/11.x/blade#including-subviews), it is sent as the array data to that view.
`$slot` | `string` | Slot data to send Laravel or Livewire components.
`$scopedSlots` | `ScopedSlot|string[]` | An array of scoped slot definitions or strings (in the case that a slot needs no attributes). See [makeScopedSlot](#makescopedslot).

### `makeScopedSlot`

Creates a single [scoped slot](#) for use with `makeContext`.

```php
$this->makeScopedSlot(
    slot: 'Ut repellat nisi hic nobis beatae quis nobis.',
    attributes: [
        'class' => 'bg-yellow-300 min-w-[2000px]'
    ]
);
```

#### arguments

argument | type | description
-- | -- | --
`$slot` | `string` | Scoped slot data to send Laravel or Livewire components.
`$attributes` | `array` | An array of key/value pairs defining attributes and their values.
