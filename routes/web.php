<?php

use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Http\Controllers\BraidController;
use njpanderson\Braid\Http\Controllers\PatternController;
use njpanderson\Braid\Http\Controllers\PatternToolsController;

Route::get('/', [BraidController::class, 'index'])->name('braid.index');
Route::get('/welcome', [BraidController::class, 'welcome'])->name('braid.welcome');
Route::get('/menu', [BraidController::class, 'menu'])->name('braid.menu');

Route::get('/patterntools', [PatternToolsController::class, 'list'])
    ->name('braid.patterntools');

Route::get('/patterntools/tool/{braidTool}/{braidPattern}/{contextId?}', [
    PatternToolsController::class, 'tool'
])
    ->name('braid.patterntools');

Route::get('/pattern/{braidPattern}/{contextId?}', [BraidController::class, 'pattern'])
    ->name('braid.pattern');

Route::post('/pattern/{braidPattern}/update', [PatternController::class, 'update'])
    ->name('braid.pattern.update');
