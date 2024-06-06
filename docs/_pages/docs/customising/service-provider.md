---
layout: single
title: Service provider
permalink: /docs/customising/service-provider/
---

Braid ships with a service provider file which sits in your application, allowing you to configure certain aspects of Braid’s behaviour.

Braid’s service provider is installed with the `braid:install` artisan command. If you don't have it, you can restore it using `vendor:publish --tag="braid-provider"`.
{: .notice--info}

## Authorization
Braid is accessible to all visitors in `local` environments. By default, it cannot be viewed on any other environment.

If you would like to determine Braid's visibility on other environments, you can alter the `braidGate` method within `App\Providers\BraidServiceProvider`.

You should return a boolean from this method determining whether or not the visitor has access. For example:

```php
use Illuminate\Http\Request;

protected function braidGate(Request $request): bool
{
    return in_array($request->user()->email, [
        'admin@example.com'
    ]);
}
```

Braid expects the return value of the `authorizeWith` callback to be a boolean `true` or `false`, the value of which will determine whether or not the visitor has access.

## Dark mode
By default, Braid will automatically detect your system’s colour theme status and act accordingly. Users may also force permanent light or dark mode within the toolbar.

If you would like to override this, and enforce a permanent style which cannot be set by users, add `Braid::setDarkMode()` to the `register` method of your `BraidServiceProvider` file:

```php
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Braid::setDarkMode();
    }
```

Passing `false` to the function works in the inverse — light mode will be enforced, regardless of user setting or system style.
