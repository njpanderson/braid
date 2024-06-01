---
layout: single
title: Context data
permalink: /docs/context-data/
toc: true
---

Thus far, we have created pretty basic pattern definitions with simple context data attached. To remind you, here's our basic sample component:

{% include basic-component.md %}

And here's a sample pattern definition:

{% include basic-pattern.md %}

That's all well and good, but what if, heaven forbid, our component is a little more complex? like the following example:

{% include complex-component.md %}

How do we test this component?

Without a pattern library solution, you could perhaps make a "showcase" style template within your Laravel app, but it would get clunky fast, be situated inside other templates, and you still wouldn't get useful editing features such as a status log or responsive layout switching[^1].

Siloing of patterns and context capability is where Braid really shines. ☀️

## Using contexts
One of Braid’s useful features is to allow component developers to define various views, or contexts, of their components using a pattern definition. This means you can show your components off in various ways, all within the pattern library, without making material changes to the component itself.

### Defining contexts
Each and every Braid pattern comes with a default context, appropriately named `default`. In fact, it's so boring we don't even show you this one; it comes for free with the base pattern class and when you load a pattern inside Braid, the defaul context is shown first.

(Feel free to play along and make a pattern at `Tests\Patterns\Components\Card`. You can use the following command in artisan):

```shell
php artisan braid:make:pattern Components\Card --type=component
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

You might even be treated to an error, if you’ve already defined the component from the example above. Don’t worry, this is to be expected! Read on&hellip;
{: .notice--info}

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

Now, when viewing the component in those three different contexts, it will take on those unique appearances:

<!-- TODO -->...

For more information, see the [Patterns](/braid/docs/reference/patterns/) reference page.

[^1]: Some developer tools can do this, but do (or should) your stakeholders, designers and account managers know how to use them?
[^2]: Don’t recognise the argument syntax here? It’s part of PHP’s [named arguments](https://www.php.net/manual/en/functions.arguments.php#functions.named-arguments) feature.