<?php

use njpanderson\Braid\Http\Middleware\Authorize;

return [
    // Will show above the pattern list
    'title' => 'Braid',

    // Base path for braid's front-end. Customise this as you wish.
    'path' => env('BRAID_PATH', 'braid'),

    // The namespace under which patterns are stored
    'patterns' => [
        'namespace' => 'Tests\\Patterns',

        'statuses' => [
            0 => [ 'label' => 'Draft', 'color' => '#C9C9C9' ],
            1 => [ 'label' => 'In Progress', 'color' => '#4083C9' ],
            2 => [ 'label' => 'Complete', 'color' => '#40C967' ],
            3 => [ 'label' => 'On Hold', 'color' => '#C440C9' ],
        ]
    ],

    'theme' => [
        // Possible values are: wheat, forest, river, plum
        // TODO: Some colours are too bright/pale in certain contexts, check each theme
        'colour' => 'wheat'
    ],

    'response_sizes' => [
        'enabled' => true,
        'sizes' => [
            'sm' => 640,
            'md' => 768,
            'lg' => 1024,
            'xl' => 1280
        ]
    ],

    'middleware' => [
        'web',
        Authorize::class,
    ],

    // Public path to the Braid vendor folder, change this only if you need to.
    'vendor_path' => 'vendor/braid',

    // Set to false if you neeed to show Laravel's own exceptions within Braid
    'exceptions' => env('BRAID_EXCEPTIONS', true),

    // The database connection on which to store pattern metadata.
    // This can be disabled if you do not require metadata storage.
    'database' => [
        'connection' => env('DB_CONNECTION', 'mysql')
    ]
];