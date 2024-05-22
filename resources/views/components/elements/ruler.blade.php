{{-- TODO: Make this adjustable? --}}
{{-- TODO: Add mark lines --}}
<div
    id="braid-ruler"
    x-ref="root"
    x-data="ruler(3)"
    class="w-full overflow-hidden bg-neutral-100 dark:bg-neutral-600"
    x-show="activePattern.id && store.ruler.open"
>
    <ul
        x-ref="ruler"
        class="ruler-bg flex min-h-[23px] cursor-copy"
        @click="onRulerClick"
    >
        @for($a = 0; $a <= 2500; $a += 100)
            <li class="ruler-number">{{ $a }}</li>
        @endfor
    </ul>

    {{-- TODO: Come back to this and allow marks to be added by clicking on the ruler --}}
    <template x-for="mark in getMarks()" :key="mark.uuid">
        <div
            class="absolute w-[1px] top-[6px] bottom-0 has-[:hover]:bg-current pointer-events-none z-50"
            :class="{
                'ruler-mark-global text-red-500': mark.store === consts.GLOBAL,
                'ruler-mark-local text-blue-500': mark.store !== consts.GLOBAL,
            }"
            :style="getMarkLeftStyle(mark)"
        >
            <button
                class="overflow-hidden braid-mark group absolute w-[20px] h-[20px] top-0 left-[-9px] cursor-ew-resize pointer-events-auto hover:overflow-visible"
                @click="onMarkClick($event, mark)"
                @mousedown="onMarkDragStart($event, mark)"
                @touchstart.passive="onMarkDragStart($event, mark)"
            >
                {{-- Right arrow --}}
                <span
                    class="absolute top-[3px] right-[-1px] h-0 w-0 overflow-hidden border-[5px] border-transparent border-l-[5px] border-l-current opacity-50 group-hover:opacity-100"
                ></span>
                {{-- Left arrow --}}
                <span class="absolute top-[3px] left-[-2px] h-0 w-0 overflow-hidden border-[5px] border-transparent border-r-[5px] border-r-current opacity-50 group-hover:opacity-100"></span>
                {{-- Label --}}
                <span class="absolute left-[-20px] bottom-[20px] bg-neutral-200 border-[1px] border-current rounded w-[60px] text-xs py-0.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span><span x-text="mark.x"></span>px</span>
                    <i class="block text-xs" x-show="mark.store === consts.GLOBAL">global</i>
                </span>
            </button>
        </div>
    </template>
</div>