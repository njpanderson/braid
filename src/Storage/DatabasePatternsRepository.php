<?php

namespace njpanderson\Braid\Storage;

use Dotenv\Store\File\Paths;
use Illuminate\Database\Eloquent\Collection;

use njpanderson\Braid\Contracts\Storage\PatternsRepository as Contract;
use njpanderson\Braid\Models\Pattern;

class DatabasePatternsRepository implements Contract
{
    private $connection = null;

    private $enabled = false;

    /**
     * Create a new Pattern repository
     *
     * @param [type] $connection
     */
    function __construct(
        $connection = null
    ) {
        if ($connection !== null) {
            $this->connection = $connection;
            $this->enabled = true;
        }
    }

    public function findByPatternId(string $patternId): Pattern|null
    {
        return Pattern::on($this->connection)
            ->where('pattern_id', $patternId)
            ->first();
    }

    function getIsEnabled(): bool
    {
        return $this->enabled;
    }

    /**
     * Execute the given callback only if data storage is enabled.
     *
     * @param callable $fn Callback to execute.
     * @param mixed $default Default variable to return.
     * @return mixed The result of the callback.
     */
    function ifEnabled(callable $fn, mixed $default = null) {
        if (!$this->enabled)
            return $default;

        return $fn($this);
    }

    /**
     * Get patterns matching the given status.
     *
     * @param int $status
     * @return Collection
     */
    public function get($status): Collection
    {
        return Pattern::on($this->connection)
            ->where('status', $status)
            ->get();
    }

    public function create(array $data): Pattern
    {
        return Pattern::create($data);
    }

    /**
     * Store the given entry updates.
     *
     * @param integer $id
     * @param array $updates
     * @return void
     */
    public function update(int $id, array $updates)
    {
        Pattern::on($this->connection)
            ->find($id)
            ->update($updates);
    }
}