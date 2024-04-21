<?php

namespace njpanderson\Braid\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use njpanderson\Braid\Services\BraidService;

class Authorize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (
            !app()->environment('local') &&
            !app()->make(BraidService::class)->authorized()
        ) {
            return abort(404);
        }

        return $next($request);
    }
}
