<?php

namespace njpanderson\Braid;

use Illuminate\Http\Request;

use njpanderson\Braid\Exceptions\ConfigurationException;

class Braid
{
    public static $darkMode = null;

    public static $authCallback;

    public static function runChecks()
    {
        static::checkConfig();
    }

    public static function checkConfig()
    {
        $statuses = config('braid.statuses');

        if (!is_array($statuses))
            throw new ConfigurationException(__('Statuses configuration must be an array.'));

        foreach ($statuses as $item) {
            if (!isset($item['id']) || !is_numeric($item['id']) || $item['id'] <= 0)
                throw new ConfigurationException(
                    __('Status configuration item IDs must be numeric and above zero.')
                );
        }
    }

    /**
     * Override dark mode selector/detection with fixed option.
     *
     * @param boolean $darkMode
     * @return void
     */
    public static function setDarkMode($darkMode = true)
    {
        static::$darkMode = $darkMode;
    }

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
