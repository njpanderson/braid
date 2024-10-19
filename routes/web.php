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
])->where(['braidPattern' => '[-a-z:]+']);

Route::prefix('/pattern/{braidPattern}')->group(function() {
    Route::get('/{contextId}/full', [BraidController::class, 'pattern'])
        ->name('braid.pattern.context.full');
    Route::get('/full', [BraidController::class, 'pattern'])
        ->name('braid.pattern.full');
    Route::get('/{contextId}', [BraidController::class, 'index'])
        ->name('braid.pattern.context');
    Route::get('/', [BraidController::class, 'index'])
        ->name('braid.pattern');
    Route::post('/update', [PatternController::class, 'update'])
        ->name('braid.pattern.update');
})->where(['braidPattern' => '[-a-z:]+']);
