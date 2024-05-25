<?php

namespace njpanderson\Braid;

use Illuminate\Http\Request;

class Braid
{
    // public static $darkMode = false;

    public static $authCallback;

    // public static function setDarkMode() {
    //     static::$darkMode = true;
    // }

    /**
     * Set the authorisation callback.
     *
     * @param callable $authCallback
     * @return void
     */
    public static function setAuthCallback(callable $authCallback)
    {
        static::$authCallback = $authCallback;
    }

    /**
     * Check the visitor is authorised to view Braid.
     *
     * @param Request $request
     * @return bool
     */
    public static function isAuthed(Request $request): bool
    {
        return (static::$authCallback ?: function () {
            // This default auth callback will only allow local environments
            return app()->environment('local');
        })($request);
    }
}