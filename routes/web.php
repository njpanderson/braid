<?php

use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Http\Controllers\BraidController;
use njpanderson\Braid\Http\Middleware\Authorize;

Route::middleware(Authorize::class)->group(function() {
    Route::get('/braid', [BraidController::class, 'index'])->name('braid.index');
    Route::get('/braid/welcome', [BraidController::class, 'welcome'])->name('braid.welcome');
    Route::get('/braid/menu', [BraidController::class, 'menu'])->name('braid.menu');
    Route::get('/braid/pattern/{patternId}/{contextId?}', [BraidController::class, 'pattern'])
        ->name('braid.pattern');
});
