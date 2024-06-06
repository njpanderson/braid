<tr class="even:bg-neutral-200 dark:even:bg-neutral-700 odd:bg-white dark:odd:bg-neutral-800">
    <th class="text-left p-2 align-top border-r-2 border-r-slate-100 dark:border-r-slate-600 break-words max-w-[20ch] font-semibold">
        <div class="flex items-center text-left">
            @if (!empty($icon))
                @svg(
                    'heroicon-' . ($icon),
                    'w-[20px] pr-1',
                    [
                        'width' => 20,
                        'height' => 20,
                        // 'style' => implode(' ', [
                        // 	(!empty($iconFill) ? "fill: ${iconFill}" : ''),
                        // 	(!empty($iconStroke) ? "stroke: ${iconStroke}" : ''),
                        // ])
                    ]
                )
            @endif

            @if (is_numeric($key))
                <span class="block bg-accent-400 dark:bg-accent-600 px-1 py-0.5 leading-none text-white rounded-md text-xs mt-0.5 text-center">
                    {{ $key }}
                </span>
            @else
                {{ $key }}
            @endif
        </div>
    </th>

    @if(isset($value))
        @if (is_array($value))
            <td class="w-full">
                <x-braid::elements.datatable.table
                    :items="$value"
                    :level="$level + 1"
                />
            </td>
        @else
            <td class="p-2 align-top w-full">
                <div class="flex items-center">
                    @if (isset($clip) && $clip)
                        <x-braid::elements.clipboard
                            class="mr-1"
                            clip="{{ $clip === true ? trim($value) : $clip }}"
                        />
                    @endif

                    @if (is_bool($value))
                        <code
                            @class([
                                'font-mono inline-block px-1 text-white rounded-md',
                                'bg-green-600 dark-bg-green-400' => !!$value,
                                'bg-red-600 dark:bg-red-400' => !$value
                            ])
                        >{{ $value ? 'true' : 'false' }}</code>
                    @elseif (is_numeric($value))
                        <code class="font-mono text-primary-600 dark:text-primary-300"># {{ $value }}</code>
                    @else
                        <code class="font-mono">{{ $value }}</code>
                    @endif
                </div>
            </td>
        @endif
    @else
        <td class="p-2 align-top w-full">{{ $slot }}</td>
    @endif
</tr>
