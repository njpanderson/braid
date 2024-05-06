<?php

namespace njpanderson\Braid;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Contracts\Foundation\Application;

use njpanderson\Braid\Exceptions\UnknownPatternClassException;
use njpanderson\Braid\Services\BraidService;
use njpanderson\Braid\View\Components\ToolButton;
use njpanderson\Braid\View\Components\Elements\DefinitionList;

final class BraidServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any package services.
     */
    public function boot(App $app): void
    {
        $service = App::make(BraidService::class);

        $this->publishes([
            __DIR__ . '/../config/braid.php' => config_path('braid.php'),
        ]);

        $this->publishes([
            __DIR__.'/../public' => public_path('vendor/braid'),
        ], ['laravel-assets']);

        // TODO: Test, etc
        $this->publishes([
            __DIR__.'/../resources/views/layouts/pattern.blade.php' => resource_path('views/vendor/braid/layouts'),
        //     __DIR__.'/../resources/views/welcome.blade.php' => resource_path('views/vendor/braid'),
        ], ['laravel-templates']);

        Route::bind('braidTool', function (string $toolClass) {
            if (!class_exists($toolClass))
                abort(404);

            return new $toolClass();
        });

        Route::bind('braidPattern', function (string $value) use ($service) {
            try {
                $patternClass = $service->getPatternClass($value);
            } catch (UnknownPatternClassException $error) {
                abort(404, $error->getMessage());
            };

            return new $patternClass;
        });

        Blade::component('braid-toolbutton', ToolButton::class);
        Blade::component('braid-elements.definitionlist', DefinitionList::class);

        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'braid');

        Gate::define('view-braid-patternlib', function() {
            return false;
        });

        view()->share('braid', $service);

        $service->registerPatternTool(
            new \njpanderson\Braid\PatternTools\Info,
            new \njpanderson\Braid\PatternTools\Context
        );
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