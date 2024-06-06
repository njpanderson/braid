<?php

namespace njpanderson\Braid\Models;

use Illuminate\Database\Eloquent\Model;

use njpanderson\Braid\Dictionaries\PatternStatus;

class Pattern extends Model
{
    protected $table = 'braid_patterns';

    protected $fillable = [
        'pattern_id',
        'status',
        'notes'
    ];

    private PatternStatus|null $patternStatus = null;

    public function getStatus(): PatternStatus
    {
        if (!$this->patternStatus)
            $this->patternStatus = PatternStatus::fromConfig($this->status);

        return $this->patternStatus;
    }
}
