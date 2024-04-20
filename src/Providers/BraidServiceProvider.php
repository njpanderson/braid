<?php

namespace njpanderson\Braid\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;

use njpanderson\Braid\Services\BraidService;

final class BraidServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any package services.
     */
    public function boot(): void
    {
        $this->publishes([
            __DIR__.'/../config/braid.php' => config_path('braid.php'),
        ]);
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        dump('braid!');
        $this->app->singleton(BraidService::class, function (Application $app) {
            return new BraidService(new Filesystem());
        });
    }
}