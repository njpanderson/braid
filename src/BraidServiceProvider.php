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
use njpanderson\Braid\View\Components\Elements\Clipboard;
use njpanderson\Braid\View\Components\Elements\Ruler;

final class BraidServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any package services.
     */
    public function boot(App $app): void
    {
        $service = App::make(BraidService::class);

        $this->publishes([
            __DIR__.'/../stubs/BraidServiceProvider.stub.php' => app_path('Providers/BraidServiceProvider.php'),
        ], ['braid-provider']);

        $this->publishes([
            __DIR__ . '/../config/braid.php' => config_path('braid.php'),
        ], ['braid-config']);

        $this->publishes([
            __DIR__.'/../public' => public_path('vendor/braid'),
        ], ['braid-assets', 'laravel-assets']);

        $this->publishes([
            __DIR__.'/../resources/views/welcome.blade.php' => resource_path('views/vendor/braid/welcome.blade.php'),
            __DIR__.'/../resources/views/layouts/pattern.blade.php' => resource_path('views/vendor/braid/layouts/pattern.blade.php')
        ], ['braid-templates']);

        Route::middlewareGroup('braid', config('braid.middleware', []));

        Blade::componentNamespace('njpanderson\\Braid\\View\\Components', 'braid');

        $this->loadViewsFrom(__DIR__.'/../resources/views', 'braid');

        $this->registerCommands();
        $this->registerRoutes($service);

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

    /**
     * Register the package routes.
     *
     * @return void
     */
    protected function registerRoutes(BraidService $service): void
    {
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

        Route::group([
            // TBC
            // 'domain' => config('braid.domain', null),
            // 'namespace' => 'njpanderson\Braid\Http\Controllers',
            'prefix' => config('braid.path'),
            'middleware' => 'braid',
        ], function () {
            $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        });
    }

    /**
     * Register the package's commands.
     *
     * @return void
     */
    protected function registerCommands()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                Console\InstallCommand::class,
            ]);
        }
    }
}