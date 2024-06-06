Every time Braid loads a pattern, it does so through a consistent layout view. This is to ensure that the same page assets (such as CSS and JS) are used in pattern displays.

Braid ships with an example layout file just to make sure things load, but it won't be very useful. You’ll likely want to replace it with something similar to your own layout file almost immediately.

Simply create or edit the file at `./resources/views/vendor/braid/layouts/pattern.blade.php` to create a new layout. Here's an example:

```twig
@extends('layouts.main')

@section('body')
    @yield('pattern')
@endsection
```

In the above example, the layout file extends an existing site layout, which contains all the `<head>` and script markup needed, as well as yielding a `body` section.

The only required part of a Braid pattern layout file is the following:

```twig
@yield('pattern')
```

This will dictate where braid places the pattern file when being viewed.

**Tip:** Your pattern layout file should ideally be as plain as possible, containing no visible markup except for the pattern itself. This will enable you to view patterns in a properly isolated manner and have them respond well to screen size changes.
{: .notice--info}
