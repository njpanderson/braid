---
layout: single
title: Using views
permalink: /docs/contexts/using-views/
# toc: true
---

As per the [previous page](/braid/docs/context-data/), most of your pattern definitions will use the `makeContext` method. This should be fine for most cases.

However, if you would like to create completely arbitrary patterns, such as [organisms](https://bradfrost.com/blog/post/atomic-web-design/#organisms) or [templates](https://bradfrost.com/blog/post/atomic-web-design/#templates) (or indeed any other static representation), then it is possible to return a simple view from within the `contextData` method. For instance, consider the following view file:

{% include organism.md %}

This view could be used directly within the `contextData` method as follows:

```php
    public function contextData(string $context): PatternContext|View
    {
        return view('patterns.cards.grid');
    }
```

And would appear as such within Braid:

{% include screenshot.html src="/assets/screens/view-context.png" breakout=true %}

(Note how the **Context** tab now shows the context view instead of object-based data.)
