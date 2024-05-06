<?php

use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Foundation\Http\Middleware\ValidateCsrfToken;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Illuminate\Support\Facades\Route;

use njpanderson\Braid\Http\Middleware\Authorize;
use njpanderson\Braid\Http\Controllers\BraidController;
use njpanderson\Braid\Http\Controllers\PatternToolsController;

use njpanderson\Braid\Livewire\Pattern as LivewirePattern;

Route::prefix('braid')->middleware([
    // TODO: This needs to be cusomisable
    EncryptCookies::class,
    AddQueuedCookiesToResponse::class,
    StartSession::class,
    ShareErrorsFromSession::class,
    SubstituteBindings::class,
    ValidateCsrfToken::class,
    Authorize::class
])->group(function() {
    Route::get('/', [BraidController::class, 'index'])->name('braid.index');
    Route::get('/welcome', [BraidController::class, 'welcome'])->name('braid.welcome');
    Route::get('/menu', [BraidController::class, 'menu'])->name('braid.menu');

    Route::get('/patterntools', [PatternToolsController::class, 'list'])
        ->name('braid.patterntools');

    Route::get('/patterntools/tool/{braidTool}/{braidPattern}/{contextId?}', [
        PatternToolsController::class, 'tool'
    ])
        ->name('braid.patterntools');

    Route::get('/pattern/{patternId}/{contextId?}', [BraidController::class, 'pattern'])
        ->name('braid.pattern');
});
