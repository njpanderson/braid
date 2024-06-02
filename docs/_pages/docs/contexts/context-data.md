---
layout: single
title: Context data
permalink: /docs/contexts/context-data/
toc: true
gallery:
  - url: /assets/screens/pattern-context-1.png
    image_path: /assets/screens/pattern-context-1.thumb.png
    alt: "Pattern context 1"
    title: "'no-image' context"
  - url: /assets/screens/pattern-context-2.png
    image_path: /assets/screens/pattern-context-2.thumb.png
    alt: "Pattern context 2"
    title: "'no-link' context"
  - url: /assets/screens/pattern-context-3.png
    image_path: /assets/screens/pattern-context-3.thumb.png
    alt: "Pattern context 3"
    title: "'long-description' context"
---

Thus far, we have created fairly basic pattern definitions with simple context data attached. To remind you, here's our basic sample component:

{% include basic-component.md %}

And here's a sample pattern definition:

{% include basic-pattern.md %}

That's all well and good, but what if our component is a little more complex? like the following example:

{% include complex-component.md %}

How do we test this component?

Without a pattern library solution, you could perhaps make a "showcase" style template within your Laravel app, but it would get clunky fast, be situated inside other templates, and you still wouldn't get useful reviewing features such as a status log or responsive layout switching[^1].

Siloing of patterns and context capability is where Braid really shines. ☀️

## Using contexts
One of Braid’s useful features is to allow component developers to define various views, or contexts, of their components using a pattern definition. This means you can show your components off in various ways, all within the pattern library, without making material changes to the component itself.

### Defining contexts
Each and every Braid pattern comes with a default context, appropriately named `default`. Braid doesn’t show you this one; it comes for free with the base pattern class and when you load a pattern inside Braid, the default context is shown first.

If you’d like to follow along with your own code, you can copy the above `card` component and place it at `/resources/views/components/card.blade.php` within your project. If this collides with an existing component, feel free to use a different name — just remember to either rename your pattern or define `$viewName` accordingly.

You can then use the following command to create an associated pattern at `Tests\Patterns\Components\Card` in artisan:

```shell
php artisan braid:make:pattern Components/Card --type=component
```

To define more contexts in your pattern definition, we can add to an array named `$contexts`:

```php
    /**
     * Pattern contexts
     *
     * @var array
     */
    protected $contexts = [
        'no-image',
        'no-link',
        'long-description'
    ];
```

This will show up within Braid as a list of links beneath the main pattern:

{% include screenshot.html src="/assets/screens/braid-contexts-in-menu.png" alt="Context options underneath a pattern" style="max-width: 50%" %}

And clicking on each of them will... Do absolutely nothing. 🤨

You might even be treated to a template error if you’ve already defined the component from the example above. Don’t worry, this is to be expected! Read on&hellip;

### Defining context data
Now we need to define the actual context data with each named context.

How you do this is up to you, but my usual approach is to use a switch, combined with the built in method named `makeContext`.

Let’s define a baseline context first. This will return the same data regardless of the context required, but it’s a good starting point:

{% include getcontext-stage1.md %}

There's a few things going on here already:

 1. `$this->makeContext` is a built in method which returns an instance of `njpanderson\Braid\Contracts\PatternContext`. This (or a view) is a required return value from `makeContext`.
 2. `makeContext` supports three arguments[^2], two of which are being used here:
    1. `attributes` defines a simple array of [attributes](https://laravel.com/docs/11.x/blade#component-attributes), which, in the context of a Laravel component, would be sent to the component as html-like attributes.
    2. `slot` defines the [slot data](https://laravel.com/docs/11.x/blade#slots) for a component. Usually expressed on the component side with `{% raw %}{{ $slot }}{% endraw %}`
    3. Scoped slots are also supported, but let’s not get into that here. See the [Patterns](/braid/docs/reference/patterns/) reference page for more information.
 3. An instance of faker (`fake()`) is also being utilised to provide a random sentence. Due to the dynamic nature of PHP, we can write complex logic to provide context information as needed, without having to manually edit the patterns each time.

### Adding the remaining contexts
Great start, but we’re only defining a single context at the moment, and our poor little `$context` argument is going completely unused. Let’s improve on that:

{% include getcontext-stage2.md %}

This example defines the data for all three contexts. `no-image`, `no-link`, and `long-description`, plus the `default` context as before.

Now, when viewing the component in those three different contexts, it will take on unique appearances:

{% include gallery caption="Three pattern contexts." %}

And in all four cases, the component file itself remains the same.

## Checking context data
If you're implementing patterns from the pattern library, the knowing what attributes, slots etc the pattern needs can come in handy. You can see the context data in the pattern tools panel at the bottom of every pattern display:

{% include screenshot.html src="/assets/screens/sample-context-data.png" %}

In fact, this tab can show all kinds of data, such as booleans, arrays, nested data and even contains syntax highlighting for your slot payloads. Experiment with it and see what works!

For more information, see the [Patterns](/braid/docs/reference/patterns/) reference page.

{% include next.html link="/braid/docs/using-views/" label="Using views" %}

[^1]: Some developer tools can do this, but do (or should) your stakeholders, designers and account managers know how to use them?
[^2]: Don’t recognise the argument syntax here? It’s part of PHP’s [named arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments) feature.