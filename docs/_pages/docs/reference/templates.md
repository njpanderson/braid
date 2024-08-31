---
layout: single
title: Templates
permalink: /docs/reference/templates/
toc: true
---

The following extensions have been made to Blade in order to make working with Braid easier.

## `@braid`
**(since v0.0.57)**

Will return `true` if the pattern is within the context of Braid. Useful if you need to disable (or enable) certain aspects of your templates if they're being shown within Braid.

```twig
@braid
    [this content will only show within Braid]
@endbraid
```

```twig
@unlessbraid
    [this content will only show outside of Braid]
@endbraid
```
