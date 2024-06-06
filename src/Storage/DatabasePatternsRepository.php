<?php

namespace njpanderson\Braid\Storage;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Schema;
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

            if (Schema::hasTable('braid_patterns'))
                $this->enabled = true;
        }
    }

    public function getIsEnabled(): bool
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
    public function ifEnabled(callable $fn, mixed $default = null) {
        if (!$this->enabled)
            return $default;

        return $fn($this);
    }

    public function findByPatternId(string $patternId): Pattern|null
    {
        if (!$this->enabled)
            return null;

        return Pattern::on($this->connection)
            ->where('pattern_id', $patternId)
            ->first();
    }

    /**
     * Get patterns matching the given status.
     *
     * @param int $status
     * @return Collection
     */
    public function getByStatus($status): Collection
    {
        if (!$this->enabled)
            return new Collection();

        return Pattern::on($this->connection)
            ->where('status', $status)
            ->get();
    }

    /**
     * Get patterns matching the given pattern IDs.
     *
     * @param array $ids
     * @return Collection
     */
    public function getByIds(array $ids): Collection
    {
        if (!$this->enabled)
            return new Collection();

        return Pattern::on($this->connection)
            ->whereIn('pattern_id', $ids)
            ->get();
    }

    /**
     * Create an entry.
     *
     * @param array $data
     * @return Pattern|null
     */
    public function create(array $data): Pattern|null
    {
        if (!$this->enabled)
            return null;

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
        if (!$this->enabled)
            return;

        Pattern::on($this->connection)
            ->find($id)
            ->update($updates);
    }
}
