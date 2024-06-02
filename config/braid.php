<?php

use njpanderson\Braid\Http\Middleware\Authorize;

return [
    // Will show above the pattern list
    'title' => 'Braid',

    // Base path for braid's front-end. Customise this as you wish.
    'path' => env('BRAID_PATH', 'braid'),

    // Pattern statuses, when using storage
    'statuses' => [
        [ 'label' => 'Draft', 'color' => '#C9C9C9' ],
        [ 'label' => 'In Progress', 'color' => '#4083C9' ],
        [ 'label' => 'Complete', 'color' => '#40C967' ],
        [ 'label' => 'On Hold', 'color' => '#C440C9' ],
    ],

    'theme' => [
        // Possible values are: lake, wheat, forest, river, plum
        'colour' => 'lake'
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

    // How much visual margin (in pixelss) to give the pattern display
    'pattern_margin' => 5,

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