<div class="px-2 text-sm">
    <table>
        <tbody class="divide-y-2 divide-neutral-600">
            <tr>
                <th class="text-left py-1 pr-4">Pattern</th>
                <td class="font-mono py-1">{{ $pattern->getLabel() }}</td>
            </tr>

            @if ($contextId)
                <tr>
                    <th class="text-left py-1 pr-4">Context</th>
                    <td class="font-mono py-1">{{ $contextId }}</td>
                <tr>
            @endif

            <tr>
                <th class="text-left py-1 pr-4">Component</th>
                <td class="font-mono py-1">{{ $pattern->getComponentClass() }}</td>
            </tr>
        </tbody>
    </table>
</div>