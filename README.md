# Braid

## What is Braid?

Braid is a pattern library tool for Laravel (+ Livewire) projects.

It enables developers to view components and markup in isolation, allowing for a consistent, clutter-free view of the atomic structure of their layouts.

### How does it work?

Patterns are defined using PHP classes which extend one of the base Braid pattern classes, for example:

```
<?php

namespace Tests\Patterns\Components;

use Illuminate\View\View;
use njpanderson\Braid\Base\ComponentPattern;

class Button extends ComponentPattern {
    protected $contexts = [
        'default',
        'red',
        'submit'
    ];

    public function contextData(string $context): array|View
    {
        switch ($context) {
        case 'submit':
            return view('patterns.components.button.submit');

        case 'red':
            return [
                'slot' => 'Submit, but red and bigger!',
                'attributes' => [
                    'class' => 'bg-red-400 text-2xl'
                ]
            ];

        default:
            return [
                'slot' => 'Button'
            ];
        }
    }
}
```

The above example defines a `Button` blade component, assuming the same component exists in your Laravel project `app/View/Components/Button.php` (and/or `resources/views/components/button.blade.php`), or wherever you store your components and their views.

It defines three **contexts**, which are essentially variations on the same component, allowing you to see the button component in three different ways.

The **red** context is a simple array of attributes which would otherwise be sent to the `<x-button/>` component, as well as a special `slot` attribute which is translated to the component’s single default slot.

The **submit** context is a complete view file, responsible for displaying the component. In this example, it is stored at `resources/views/patterns/components/button/submit.blade.php`, but it can be anywhere you like. Complete view files are used when the component requirements are too complex to be defined in an array — for example, with multiple slots.

## Installing Braid
...

## Configuring your project
...

### Defining your patterns
...

### Creating a pattern layout
...

## Configuring Braid
...

## Extending Braid
...