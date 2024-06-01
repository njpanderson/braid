---
layout: single
title: Installation
permalink: /docs/installation/
---

Like Laravel, Braid is installed with the Composer package manager.

Use Composer to install Braid within your existing Laravel project:

```shell
composer require njpanderson/braid
```

Once the Braid package files are installed, run the following artisan command to install the core files:

```shell
php artisan braid:install
```

This will install:

 - The front-end assets into `public/vendor/braid`.
 - The `BraidServiceProvider` class.
 - A `braid.php` config file.

## Setting up manually
If you don’t want to install Braid automatically, or have specific needs, that’s fine too.

They're installed for you with Composer but otherwise, you’ll need to make sure the front end assets are available at minimum for Braid to work:

```shell
php artisan vendor:publish --tag="braid-assets"
```

## Publishing the config file
To customise the configuration, you can use the following command to generate the `braid.php` config file:

```shell
php artisan vendor:publish --tag="braid-config"
```

## Creating the pattern layout

{% include docs/pattern-layout.md %}

{% include next.html link="/braid/docs/database-storage/" label="Setting up database storage" %}