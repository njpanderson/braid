---
layout: single
title: Your first pattern
permalink: /docs/your-first-pattern/
toc: true
---

Braid works by scanning the `Tests/Patterns` namespace for pattern definitions representing individual view files in your project.

Each pattern definition’s location is used to infer the associated view file automatically. For instance, with a Pattern definition at:

`Tests\Patterns\Components\Button`

The view will loaded from:

`components.button`

Which will be resolved internally by Laravel to load the correct view as a distinct pattern.

## Setting up a pattern definition
Pattern definitions come in three types:

 - **Basic** (for any partial .blade.php file)
 - **Component** (for Laravel components)
 - **Livewire** (for Livewire components)

A pattern must extend one of these base classes in order to be correctly registered. For example, a **basic** pattern class could look like this:

{% include basic-pattern.md %}

🙈 In reality, there isn’t a huge difference between the three base classes at the moment, but it’s still best to keep them distinct as future upgrades to Braid may require it.
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

Two other types of pattern definitions can be made. `BasicPattern`, for simple, view-based partials with no component structure, and `LivewirePattern`, for targeting livewire components.

### Optimal directory structure
If you want to stick to the automatic view resolution, then it’s best to match your view file structure within the patterns namespace. I.e. put your Laravel component patterns in `Tests\Patterns\Components` and your livewire patterns in `Tests\Patterns\Livewire` — just as the view files are generally located.

This is optional, but will mean you don't need to manually define your view locations each time.

## Manual view definition
Automatic view resolution will mean you don't need to specify view files manually, however if you need a pattern to point somewhere else, a simple change to your pattern definition class can be made:

```php
    /**
     * Name of the view, overrides view resolution.
     *
     * @var string
     */
    protected string $viewName = '<your.view.name>';
```

{% include next.html link="/braid/docs/context-data/" label="Context data" %}