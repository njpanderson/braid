---
layout: single
title: Creating patterns
permalink: /docs/creating-patterns/
toc: true
---

Braid works by scanning the `Tests/Patterns` namespace for pattern definitions representing individual view files in your project.

Each pattern definition’s location is used to infer the associated view location automatically. For instance, with a Pattern definition at:

`Tests\Patterns\Components\Button`

The view would loaded as:

`components.button`

Which is then resolved internally by Laravel to load the correct view as a distinct pattern.

## Setting up a pattern definition
Pattern definitions come in three types:

 - **Basic** (for any embedded .blade.php file)
 - **Component** (for [Laravel components](https://laravel.com/docs/11.x/blade#components))
 - **Livewire** (for [Livewire components](https://livewire.laravel.com/docs/components))

A pattern must extend one of these base classes in order to be correctly registered. For example, a **basic** pattern class could look like this:

{% include basic-pattern.md %}

🤖 Braid will automatically load the pattern using slightly different techniques depending n the pattern definition’s parent class, so regardless of where you put your patterns, the class they extend is important.
{: .notice--info}

## Creating a pattern
You can create patterns in two ways: either by using the `braid:make:pattern` artisan command, or by manually creating a PHP file.

The following command can be used to create pattern files, for example:

```shell
php artisan braid:make:pattern Button --type=component
```

This will create a single class within `tests/Patterns` as follows:

```php
namespace Tests\Patterns;

use Illuminate\View\View;
use njpanderson\Braid\Base\ComponentPattern;
use njpanderson\Braid\Contracts\PatternContext;

class Button extends ComponentPattern {
    /**
     * Pattern contexts
     *
     * @var array
     */
    protected $contexts = [];

    public function contextData(string $context): PatternContext|View
    {
        return $this->makeContext();
    }
}
```

Two other types of pattern definitions can be made. `BasicPattern` (`--type=basic`), for simple, view-based partials with no component structure, and `LivewirePattern` (`--type=livewire`), for targeting livewire components.

**Hint:** If you ever forget which types are available, or how to use the make command, just run `php artisan braid:make:pattern --help`
{: .notice--info}

### Optimal directory structure
If you want to stick to the automatic view resolution, then it’s best to match your view file structure within the patterns namespace. I.e. put your Laravel component patterns in `Tests\Patterns\Components` and your livewire patterns in `Tests\Patterns\Livewire` — just as the view files are generally located.

This is optional, but will mean you don't need to define the view location on each pattern.

## Manual view definition
Automatic view resolution will mean you don't need to specify view files manually, however if you need a pattern to point somewhere else, a change to your pattern definition class can be made:

```php
    /**
     * Name of the view, overrides view resolution.
     *
     * @var string
     */
    protected string $viewName = '<your.view.name>';
```

{% include next.html link="/braid/docs/contexts/context-data/" label="Context data" %}
