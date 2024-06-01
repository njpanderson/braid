<x-braid::forms.inline
    id="pattern-info"
    action="{{ route('braid.pattern.update', [$pattern->getId()]) }}"
    autocomplete="off"
>
    <x-braid::elements.datatable.table
        :items="[[
            'key' => 'Pattern',
            'icon' => 'o-document',
            'value' => $pattern->getLabel(),
            'clip' => true
        ], [
            'key' => 'ID',
            'icon' => 'o-hashtag',
            'value' => $pattern->getId(),
            'clip' => true
        ], [
            'key' => 'Context',
            'icon' => 'o-adjustments-vertical',
            'value' => $contextId ? $contextId : null,
            'clip' => true
        ], [
            'key' => 'View',
            'icon' => 'o-photo',
            'value' => $pattern->getView()->fullName,
            'clip' => true
        ]]"
    >
        @if ($braid->getIsRepositoryEnabled())
            <x-braid::elements.datatable.row
                key="Status"
                icon="o-information-circle"
            >
                {{-- TODO? <x-slot:key>
                    <label for="patterntools-info-status">Status</label>
                </x-slot:key> --}}

                <x-braid::forms.fields.select
                    name="status"
                    id="patterntools-info-status"
                    x-model="fields.status"
                    class="font-mono"
                    :options="$braidHtml->getStatusOptionsForSelect($status->id)"
                    :value="$status->id"
                />
            </x-braid::elements.datatable.row>

            <x-braid::elements.datatable.row
                key="Notes"
                icon="o-document-text"
            >
                <x-braid::forms.fields.textarea
                    expanding
                    name="notes"
                    rows="2"
                    id="patterntools-info-notes"
                    x-model="fields.notes"
                    :value="$model->notes ?? ''"
                />
            </x-braid::elements.datatable.row>
        @endif
    </x-braid::elements.datatable.table>
</x-braid::forms.inline>