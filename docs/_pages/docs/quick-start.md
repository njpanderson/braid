---
layout: single
title: Quick start
permalink: /docs/quick-start/
toc: true
---

Getting Braid up and running couldn't be simpler, but if you’d prefer a deep-dive into the documentation instead, start with the [Requirements](/braid/docs/requirements/).

## Prerequisites
Before you start, you’ll need to make sure you at least have a working **Laravel 11** app ready to rock, and are using **Composer**. See the [Requirements](/braid/docs/requirements/) page for detailed info.

## Installation
First, use Composer to install Braid within your existing Laravel project:

```shell
composer require njpanderson/braid
```

Once the Braid package files are installed, run the following artisan command to install the core files:

```shell
php artisan braid:install
```

This will install the service provider, front-end assets and a configuration file.

## Creating the pattern layout

{% include docs/pattern-layout.md %}

## Deciding which templates to show
Braid will automatically map pattern definitions to view files in the same path. For instance, a pattern at `\Test\Patterns\Components\Button` will show the view at `components/button.blade.php`.

This will work for any Laravel or Livewire component, include or partial.

If you don't want your pattern structure to follow the view files, each pattern can be [overridden](#) with the `$viewName` class property. This is especially useful if you want to create a completely independent menu structure in Braid.

## Setting up your first pattern
Once you’ve decided which partial, component or Livewire component to show in Braid, create a Pattern file in the same subfolder within your patterns namespace. For instance, given our button example with a view file in `./resources/views/components/button.blade.php`:

{% include basic-component.md %}

The following pattern definition could be created at `./tests/Patterns/Components/Button.php`:

{% include basic-pattern.md %}

Navigate to `/braid` and the following screen should show:

{% include screenshot.html src="/assets/screens/component-button.png" alt="A simple button component in Braid" breakout=true %}
