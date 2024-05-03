<table
    @class([
        'text-sm w-full dark:text-white',
        'border-l-4 border-l-accent-400 dark:border-l-accent-600' => $level > 0
    ])
>
    <tbody>
        @foreach ($context as $key => $value)
        <tr class="even:bg-slate-100 dark:even:bg-neutral-700">
            <th class="text-left px-2 py-1 align-top border-r-2 border-r-slate-100 dark:border-r-slate-600">
                @if (is_numeric($key))
                    <span class="block bg-accent-400 dark:bg-accent-600 px-1 py-0.5 leading-none text-white rounded-md text-xs mt-0.5 text-center">
                        {{ $key }}
                    </span>
                @else
                    {{ $key }}
                @endif
            </th>
            @if (is_scalar($value))
                <td class="px-2 py-1 align-top w-full">
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
                </td>
            @else
                <td class="w-full">
                    @include('braid::patterntools.tools.partials.contexttable', [
                        'context' => $value,
                        'level' => ($level + 1)
                    ])
                </td>
            @endif
        </tr>
        @endforeach
    </tbody>
</table>