---
layout: single
title: Configuring Braid
permalink: /docs/customising/configuring-braid/
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
`statuses` | `Draft`, `In Progress`, `Complete`, `On Hold` | The statuses to use when pattern database storage is enabled.