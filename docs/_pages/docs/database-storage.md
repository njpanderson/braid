---
layout: single
title: Database Storage
permalink: /docs/database-storage/
---

Braid can optionally store environment-specific metadata such as notes and status updates against individual pattern definitions. This is enabled by creating a table on your current database solution.

To install the supporting table, run the following command:

```shell
php artisan vendor:publish --tag="braid-migrations"
```

Then once the migrations are created, run them:

```shell
php artisan migrate
```

Braid will create the table data within your database, allowing it to store further information against patterns.

**Note**: Stored notes and status updates are specific to the environment on which Braid is being shown. This means they are also shared between users at the same location.
{: .notice--info}

{% include next.html link="/braid/docs/your-first-pattern/" label="Your first pattern" %}
