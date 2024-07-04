<?php

use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Http\Controllers\BraidController;
use njpanderson\Braid\Http\Controllers\PatternController;
use njpanderson\Braid\Http\Controllers\PatternToolsController;

Route::prefix('/')->group(function() {
    Route::get('', [BraidController::class, 'index'])->name('braid.index');
    Route::get('full', [BraidController::class, 'welcome'])->name('braid.index.full');
});

Route::get('/menu', [BraidController::class, 'menu'])->name('braid.menu');

Route::get('/patterntools', [PatternToolsController::class, 'list']);

Route::get('/patterntools/tool/{braidTool}/{braidPattern}/{contextId?}', [
    PatternToolsController::class, 'tool'
]);

Route::prefix('/pattern')->group(function() {
    Route::get('/{braidPattern}/{contextId}/full', [BraidController::class, 'pattern'])
        ->name('braid.pattern.context.full');
    Route::get('/{braidPattern}/full', [BraidController::class, 'pattern'])
        ->name('braid.pattern.full');
    Route::get('/{braidPattern}/{contextId}', [BraidController::class, 'index'])
        ->name('braid.pattern.context');
    Route::get('/{braidPattern}', [BraidController::class, 'index'])
        ->name('braid.pattern');
});

Route::post('/pattern/{braidPattern}/update', [PatternController::class, 'update'])
    ->name('braid.pattern.update');
