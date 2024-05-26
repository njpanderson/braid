<?php

namespace App\Providers;

use njpanderson\Braid\Braid;
use Illuminate\Http\Request;
use njpanderson\Braid\BraidAppServiceProvider;

class BraidServiceProvider extends BraidAppServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Braid::setDarkMode();
    }

    /**
     * Define a gate for Braid's non-local access.
     *
     * This method should return a boolean dictating whether the visitor can
     * access the Braid pattern library.
     *
     * @return bool
     */
    protected function braidGate(Request $request): bool
    {
        // Do something with $request, or whatever you want.
        // ...

        // Return false for now
        return false;
    }
}
