<?php

namespace njpanderson\Braid;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;

use njpanderson\Braid\Services\BraidService;

final class BraidServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any package services.
     */
    public function boot(App $app): void
    {
        $this->publishes([
            __DIR__ . '/../config/braid.php' => config_path('braid.php'),
        ]);

        $this->publishes([
            __DIR__.'/../public' => public_path('vendor/braid'),
        ], ['braid-assets']);

        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'braid');

        Gate::define('view-braid-patternlib', function() {
            return false;
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/braid.php', 'braid'
        );

        $this->app->singleton(BraidService::class, function (Application $app) {
            return new BraidService(new Filesystem());
        });
    }
}