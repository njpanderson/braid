<div
    id="braid-ruler"
    x-ref="root"
    x-data="ruler(3 + {{ (int) config('braid.pattern_margin') }})"
    class="w-[3560px] relative bg-neutral-100 dark:bg-neutral-600"
    :style="getRulerLeftStyle()"
    x-show="activePattern.id && store.ruler.open"
    @braidframescrolled.window="onFrameScrolled"
    @patternloaded.window="onPatternLoaded"
    x-cloak
>
    <ul
        x-ref="ruler"
        class="ruler-bg flex min-h-[23px] cursor-copy"
        @click="onRulerClick"
    >
        @for($a = 0; $a <= 3500; $a += 100)
            <li class="ruler-number">{{ $a }}</li>
        @endfor
    </ul>

    <span class="absolute left-[3565px] top-0 bottom-0 flex gap-1 items-end text-gray-600 dark:text-gray-100 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" class="size-5 translate-y-[1px]"><path fill="currentColor" fill-rule="evenodd" d="M42.299 19.603c4.718-.846 7.776-4.197 7.654-6.736c-.196-4.099-3.155-6.159-9.534-6.185h-.082a1.39 1.39 0 0 1-1.384-1.238a1.194 1.194 0 0 1 1.119-1.324l.232-.014c1.898-.12 3.996-.19 5.128.078c4.72 1.119 7.34 3.965 7.56 8.537c.175 3.636-2.53 7.19-6.337 10l-.111.08q1.105 1.934 1.415 4.322c.718 4.608.05 7.474.562 9.372c.513 1.899 2.846 2.94 3.767 5.061s.75 3.05.48 4.72q-.239 1.486-1.078 4.342a1.014 1.014 0 0 1-.973.728h-3.371c-.56 0-1.014-.454-1.014-1.014v-.51a1.014 1.014 0 0 1 1.025-1.014q.683.009 1.164-.36c.811-.62.878-.966.878-2.172q0-1.206-.878-2.427c-2.35-1.528-4.315-2.722-6.049-3.6q-.268 2.643-1.053 4.806q-.825 2.274-2.867 5.786a1.01 1.01 0 0 1-.877.505h-2.668c-.55 0-1-.438-1.013-.988l-.012-.46a1.014 1.014 0 0 1 .966-1.04l1.395-.066c.412-.02.771-.287.908-.676q.693-1.968.57-3.868q-.14-2.143-1.426-5.846c-3.56-.032-10.782 1.513-12.445 1.651q-.588.049-1.208-.006a14 14 0 0 0-.623 3.238q-.154 1.997-.028 7.022a1.014 1.014 0 0 1-1.014 1.039h-2.771c-.56 0-1.014-.454-1.014-1.014v-.696c0-.56.454-1.014 1.014-1.014h.427a.984.984 0 0 0 .924-1.322a28 28 0 0 1-1.221-4.369l-3.332 7.8c-.16.373-.527.615-.933.615h-3.68c-.56 0-1.015-.454-1.015-1.014v-.518c0-.492.353-.913.837-.998l1.752-.311c.22-.04.422-.15.573-.316q1.067-1.175 1.376-2.927c.508-2.881.83-3.193 0-5.963c-.27-.905-2.252-1.787-3.52-5.796q-1.219-3.849-2.162-13.077a1.014 1.014 0 0 0-.846-.898l-1.948-.315c-.3-.049-.563-.23-.716-.493L3.28 16.056l-.042-.067A1.24 1.24 0 0 1 3 15.277q0-.294.153-.607q.082-.167.217-.294l2.015-1.893c.14-.133.241-.303.289-.49l.114-.453c.102-.403.326-.766.64-1.038q.909-.783 1.342-1.05q.54-.332 2.242-.796q-.864-1.209-.948-2.116c-.085-.907-.157-1.805.21-1.84q.369-.034 1.867 2.028q-.117-2.606.527-2.302t2.83 3.513l1.422 1.62a7.1 7.1 0 0 1 1.488 2.723q1.078 3.75 2.05 5.399c1.159 1.962 2.58 4.378 7.198 4.02c4.617-.357 6.17-1.292 9.246-1.776a44 44 0 0 1 4.752-.461a6.3 6.3 0 0 1 1.645.139"/></svg>
        <span class="whitespace-nowrap text-xs">Meow, what a wide page!</span>
    </span>

    <template x-for="mark in getMarks()" :key="mark.uuid">
        <div
            class="absolute w-[1px] top-[6px] h-[100vh] has-[:hover]:bg-current pointer-events-none z-50"
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
                <span class="absolute left-[-20px] bottom-[20px] bg-neutral-200 dark:bg-neutral-400 border-[1px] border-current rounded w-[60px] text-xs py-0.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span><span x-text="mark.x"></span>px</span>
                    <i class="block text-xs" x-show="mark.store === consts.GLOBAL">global</i>
                </span>
            </button>
        </div>
    </template>
</div>
