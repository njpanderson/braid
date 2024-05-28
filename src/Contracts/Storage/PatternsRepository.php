<?php

namespace njpanderson\Braid\Contracts\Storage;

use Illuminate\Support\Collection;

use njpanderson\Braid\Models\Pattern;

interface PatternsRepository
{
    // /**
    //  * Return an entry with the given ID.
    //  *
    //  * @param  mixed  $id
    //  * @return Pattern|null
    //  */
    // public function find($id): Pattern|null;

    /**
     * Find a pattern by its class id
     *
     * @param string $patternId
     * @return Pattern|null
     */
    public function findByPatternId(string $patternId): Pattern|null;

    /**
     * Return all the entries of a given status.
     *
     * @param int $status
     * @return \Illuminate\Support\Collection
     */
    public function getByStatus($status): Collection;

    /**
     * Return all of the entries matching the given IDs
     *
     * @param array $ids
     * @return Collection
     */
    public function getByIds(array $ids): Collection;

    /**
     * Run the closure or return the default if enabled/disabled.
     *
     * @param callable $fn Run the callable if enabled
     * @param mixed $default Return the default if disabled
     * @return void
     */
    public function ifEnabled(callable $fn, mixed $default = null);

    /**
     * Create an entry.
     *
     * @param array $data
     * @return Pattern
     */
    public function create(array $data);

    /**
     * Store the given entry updates.
     *
     * @param integer $id
     * @param array $updates
     * @return void
     */
    public function update(int $id, array $updates);
}
