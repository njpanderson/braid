<x-braid-elements.definitionlist
    :items="[[
        'label' => 'Patern',
        'icon' => 'document',
        'value' => $pattern->getLabel()
    ], [
        'label' => 'Context',
        'icon' => 'adjustments-vertical',
        'value' => $contextId ? $contextId : null
    ], [
        'label' => 'Component',
        'icon' => 'code-bracket-square',
        'value' => $pattern->getComponentClass()
    ]]"
    item-classes="px-2"
/>