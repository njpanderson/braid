<?php

namespace njpanderson\Braid\Http\Middleware;

use Closure;
use njpanderson\Braid\Braid;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Authorize
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Braid::isAuthed($request))
            return $next($request);

        abort(403);
    }
}
