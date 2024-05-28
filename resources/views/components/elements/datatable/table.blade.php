<table
    @class([
        'text-sm w-full dark:text-white',
        'border-l-2 border-l-accent-400 dark:border-l-accent-600' => $level > 0
    ])
>
    <tbody>
        @foreach ($items as $row)
            @if (!empty($row['value']) || $showEmptyValues)
                <x-braid::elements.datatable.row
                    :level="$level"
                    :key="$row['key']"
                    :value="$row['value']"
                    :icon="$row['icon'] ?? ''"
                    :clip="$row['clip'] ?? false"
                />
            @endif
        @endforeach
        {{ $slot }}
    </tbody>
</table>