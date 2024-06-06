<?php

use njpanderson\Braid\Http\Middleware\Authorize;

return [
    // Sets the main page title
    'title' => 'Braid',

    // Will replace the braid logo, if set
    'logo' => '',

    // Base path for braid's front-end. Customise this as you wish.
    'path' => env('BRAID_PATH', 'braid'),

    // Pattern statuses, when using storage
    // color can be any valid CSS colour definition.
    'statuses' => [
        [ 'id' => 1, 'label' => 'Draft', 'color' => '#C9C9C9' ],
        [ 'id' => 2, 'label' => 'In Progress', 'color' => '#4083C9' ],
        [ 'id' => 3, 'label' => 'Complete', 'color' => '#40C967' ],
        [ 'id' => 4, 'label' => 'On Hold', 'color' => '#C440C9' ],
    ],

    // Overall interface theme
    // Possible values are: lake, wheat, forest, river, plum
    'theme' => [
        'colour' => 'lake'
    ],

    // Response size toolbar options
    'response_sizes' => [
        // Disable/enable entirely
        'enabled' => true,
        // Sizes are in pixels
        'sizes' => [
            'sm' => 640,
            'md' => 768,
            'lg' => 1024,
            'xl' => 1280
        ]
    ],

    // How much visual margin (in pixelss) to give the pattern display
    'pattern_margin' => 5,

    // Middleware to apply to Braid's UI
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
