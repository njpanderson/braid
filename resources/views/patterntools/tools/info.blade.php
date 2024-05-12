<x-braid::elements.definitionlist
    :items="[[
        'label' => 'Patern',
        'icon' => 'document',
        'value' => $pattern->getLabel(),
        'clip' => true
    ], [
        'label' => 'Context',
        'icon' => 'adjustments-vertical',
        'value' => $contextId ? $contextId : null,
        'clip' => true
    ], [
        'label' => 'Component',
        'icon' => 'code-bracket-square',
        'value' => $pattern->getComponentClass(),
        'clip' => true
    ]]"
    item-classes="px-2"
/>