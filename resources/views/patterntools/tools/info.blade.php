<x-braid::forms.inline
    action="{{ route('braid.pattern.update', [$pattern->getId()]) }}"
    autocomplete="off"
>

    <x-braid::elements.datatable.table
        :items="[[
            'key' => 'Patern',
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
            'key' => 'Component',
            'icon' => 'o-code-bracket-square',
            'value' => $pattern->getComponentClass(),
            'clip' => true
        ]]"
    >
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
                class="font-mono"
                id="patterntools-info-notes"
                x-model="fields.notes"
                :value="$model->notes ?? ''"
            />
        </x-braid::elements.datatable.row>
    </x-braid::elements.datatable.table>
</x-braid::forms.inline>