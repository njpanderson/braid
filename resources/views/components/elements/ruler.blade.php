{{-- TODO: Make this adjustable? --}}
{{-- TODO: Add mark lines --}}
<div
    class="w-full overflow-hidden bg-neutral-200"
    x-show="activePattern.id && uiState.ruler"
>
    <ul class="ruler-bg flex min-h-[23px] ml-[2px]">
        @for($a = 0; $a <= 2500; $a += 100)
            <li class="ruler-number">{{ $a }}</li>
        @endfor
    </ul>

    {{-- TODO: Come back to this and allow marks to be added by clicking on the ruler --}}
    {{-- <div class="ruler-mark absolute w-[1px] top-[50px] bottom-0 left-[102px] has-[:hover]:bg-red-500 pointer-events-none">
        <button
            class="group absolute w-[30px] h-[20px] top-0 left-[-14px] cursor-ew-resize pointer-events-auto"
            @click="alert('click on mark')"
        >
            <span class="absolute top-[3px] right-[3px] h-0 w-0 overflow-hidden border-[5px] border-transparent border-l-[5px] border-l-red-500/50 group-hover:border-l-red-500"></span>
            <span class="absolute top-[3px] left-[2px] h-0 w-0 overflow-hidden border-[5px] border-transparent border-r-[5px] border-r-red-500/50 group-hover:border-r-red-500"></span>
            <span class="absolute left-[-15px] top-[-25px] bg-accent-300/80 rounded w-[60px] text-xs py-0.5 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span><span x-text="100"></span>px</span>
            </span>
        </button>
    </div> --}}
</div>