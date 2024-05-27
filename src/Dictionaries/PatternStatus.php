<?php

namespace njpanderson\Braid\Dictionaries;

class PatternStatus
{
	function __construct(
		private $id,
		private $label,
		private ?string $color = '000000'
	) { }

	public static function fromConfig(int $id = -1) {
		$statuses = config('braid.patterns.statuses');

		if (!isset($statuses[$id])) {
			// Default to the first status
			return new static(
				-1,
				__('Unknown')
			);
		}

		return new static(
			$id,
			$statuses[$id]['label'],
			$statuses[$id]['color']
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