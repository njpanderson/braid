<?php

use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Http\Middleware\Authorize;
use njpanderson\Braid\Http\Controllers\BraidController;
use njpanderson\Braid\Http\Controllers\PatternToolsController;

Route::middleware([
    Authorize::class,
    SubstituteBindings::class
])->group(function() {
    Route::get('/braid', [BraidController::class, 'index'])->name('braid.index');
    Route::get('/braid/welcome', [BraidController::class, 'welcome'])->name('braid.welcome');
    Route::get('/braid/menu', [BraidController::class, 'menu'])->name('braid.menu');

    Route::get('/braid/patterntools', [PatternToolsController::class, 'list'])
        ->name('braid.patterntools');

    Route::get('/braid/patterntools/tool/{braidTool}/{braidPattern}/{contextId?}', [
        PatternToolsController::class, 'tool'
    ])
        ->name('braid.patterntools');

    Route::get('/braid/pattern/{patternId}/{contextId?}', [BraidController::class, 'pattern'])
        ->name('braid.pattern');
});
