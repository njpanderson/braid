---
layout: single
title: Quick start
permalink: /docs/quick-start/
toc: true
---

Getting Braid up and running couldn't be simpler.

## Prerequisites
This guide will assume at least a baseline knowledge of Laravel and the following packages and tools preinstalled:

 - [Composer](https://getcomposer.org).
 - [Livewire](https://livewire.laravel.com), if creating Livewire components.
 - A baseline front end build process for your *own assets* (See [Laravel documentation](https://laravel.com/docs/11.x/vite#main-content)).
 - An understanding of PHP Classes.
 - A local development environment with web server (or `php artisan serve` up and running).

## Installation
First, use Composer to install Braid within your existing Laravel project:

~~~ shell
$ composer require njpanderson/braid
~~~

Once the Braid package files are installed, run the following artisan command to install the core files:

~~~ shell
$ php artisan braid:install
~~~

This will install the service provider, front-end assets and a configuration file.

## Deciding which templates to show
Braid will automatically map pattern definitions to view files in the same path. For instance, a pattern at `\Test\Patterns\Components\Button` will show the view at `components/button.blade.php`.

This will work for any Laravel or Livewire component, include or partial.

If you don't want your pattern structure to follow the view files, each pattern can be [overridden](#) with the `$viewName` class property. This is especially useful if you want to create a completely independent menu structure in Braid.

## Setting up your first pattern
Once you’ve decided which partial, component or Livewire component to show in Braid, create a Pattern file in the same subfolder within your patterns namespace. For instance, given our button example with a view file in `./resources/views/components/button.blade.php`:

{% highlight twig linenos %}
{% raw %}
<button
    {{ $attributes->class([
        "border rounded-md border-sky-400 shadow-md ..."
    ]) }}
>
    {{ $slot }}
</button>
{% endraw %}
{% endhighlight %}

The following pattern definition would be created at `./tests/Patterns/Components/Button.php`:

{% highlight php linenos %}
<?php

namespace Tests\Patterns\Components;

use Illuminate\View\View;
use njpanderson\Braid\Base\ComponentPattern;
use njpanderson\Braid\Contracts\PatternContext;

class Button extends ComponentPattern {
    public function contextData(string $context): PatternContext|View
    {
        return $this->makeContext(
            slot: 'Button'
        );
    }
}
{% endhighlight %}

Navigate to `/braid` and the following screen should show:

{% include screenshot.html src="/assets/screens/component-button.png" alt="A simple button component in Braid" breakout=true %}
