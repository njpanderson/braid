<?php

namespace njpanderson\Braid\Dictionaries;

class PatternStatus
{
	function __construct(
		private $id,
		private $label,
		private ?string $color = '000000'
	) { }

	public static function fromConfig(int|null $id = null) {
		$statuses = collect(config('braid.statuses'));
		$status = $statuses->first(fn($status) => (
			$status['id'] === $id
		));

		if (!$status) {
			// Default to the first status
			return new static(
				null,
				__('Unknown')
			);
		}

		return new static(
			$status['id'],
			$status['label'],
			$status['color']
		);
	}

	public function __get($key)
	{
		switch ($key) {
		case 'id';
		case 'label';
		case 'color';
			return $this->{$key};

		default:
			return null;
		}
	}
}