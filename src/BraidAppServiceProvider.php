<?php

namespace njpanderson\Braid;

use Illuminate\Http\Request;
use njpanderson\Braid\Braid;
use Illuminate\Support\ServiceProvider;

class BraidAppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->setAuthorizationMethod();
    }

    /**
     * Sets the authorisation method
     *
     * @return void
     */
    protected function setAuthorizationMethod(): void
    {
        Braid::setAuthCallback(function ($request) {
            return (
                app()->environment('local') ||
                $this->braidGate($request)
            );
        });
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
        // No non-local access by default
        return false;
    }
}