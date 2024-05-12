<?php

return [
    // Will show above the pattern list
    'title' => 'Braid',

    // The namespace under which patterns are stored
    'patterns_namespace' => 'Tests\\Patterns',

    'theme' => [
        // Possible values are: wheat, forest, river, plum
        // TODO: Some colours are too bright/pale in certain contexts, check each theme
        'colour' => 'forest'
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

    // Public path to the Braid vendor folder, change this only if you need to.
    'vendor_path' => 'vendor/braid',

    // Set to false if you neeed to show Laravel's own exceptions within Braid
    'exceptions' => env('BRAID_EXCEPTIONS', true)
];