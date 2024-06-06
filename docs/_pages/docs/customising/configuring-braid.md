---
layout: single
title: Configuring Braid
permalink: /docs/customising/configuring-braid/
toc: true
---

As well as the [Service Provider](/docs/customising/service-provider/), Braid can be configured with the `braid.php` file in your application’s `config` directory.

Braid’s config file is installed with the `braid:install` artisan command. If you don't have it, or are upgrading Braid, you can restore it using `vendor:publish --tag="braid-config"`.
{: .notice--info}

## Available options
The following options are available.

(Option defaults in `UPPERCASE` are defined by environment variables.)
{: .notice--info}

option | default | description
-- | -- | --
`title` | Braid | The title for Braid’s main interface.
`logo` | (Braid’s logo) | If you would like to specify a custom logo (or simply some HTML text), you can do so here.
`path` | `BRAID_PATH` or `braid` | The root web path for braid.
`statuses` | `Draft`, `In Progress`, `Complete`, `On Hold` | The statuses to use when pattern database storage is enabled. See [status keys](#status-keys) below.
`theme` | `lake` | The theme to use in Braid’s interface. See [themes](#themes) below.
`response_sizes.enabled` | `true` | Whether to display a response size switcher in the top toolbar.
`response_sizes.sizes` | `sm`, `md`, `lg`, `xl` | The sizes are a key/value pair of names and pixel widths. You can customise this as your project requires.
`pattern_margin` | `5` | In pixels, the margin size around patterns as they display in the UI.
`middleware` | `web`, `Braid\...\Authorise` | Middleware to use on each request to Braid.
`vendor_path` | `vendor/braid` | Path to the public vendor folder.
`exceptions` | `BRAID_EXCEPTIONS` or `true` | Braid will attempt to show more useful contextually relevant exceptions if this setting is `true`. Set to `false` if you need to see the raw Laravel-based exceptions instead.
`database.connection` | `DB_CONNECTION` or `mysql` | The database connection to use when querying the pattern storage.

### Status keys
Statuses are stored as an array of associative array data, and each status item must have one of the following keys:

key | description
-- | -- | --
`id` | The numeric ID to give the status. This ID is used for database storage and ideally should not change.
`label` | The status label. Try to keep it short.
`color` | The CSS colour you’d like to use for the status. Any CSS colour definition is fine.

### Themes
There are a selection of built in themes you can switch between.

Drag the slider left/right to see the light and dark variants of each theme.
{: .notice--info}

#### Lake

{% include compare.html src1="/assets/screens/themes/lake-light.png" src2="/assets/screens/themes/lake-dark.png" %}

#### Wheat

{% include compare.html src1="/assets/screens/themes/wheat-light.png" src2="/assets/screens/themes/wheat-dark.png" %}

#### River

{% include compare.html src1="/assets/screens/themes/river-light.png" src2="/assets/screens/themes/river-dark.png" %}

#### Forest

{% include compare.html src1="/assets/screens/themes/forest-light.png" src2="/assets/screens/themes/forest-dark.png" %}

#### Plum

{% include compare.html src1="/assets/screens/themes/plum-light.png" src2="/assets/screens/themes/plum-dark.png" %}
