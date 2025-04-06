@extends('braid::layouts.default')

@section('main')
    <div
        x-data="patternLibrary"
        x-on:braidframeloaded.window="onFrameLoaded"
        x-on:braidframeunloaded.window="onFrameUnLoaded"
        x-on:braidcanvasresize.window.throttle.50ms="onCanvasResize"
        class="braid-app h-[100dvh] bg-gradient-to-b from-primary-300 to-primary-400 dark:from-primary-600 dark:to-primary-700 dark:text-white"
        :class="{
            'grid-cols-[250px_minmax(900px,_1fr)]': store.menu.open,
            'grid-cols-[10px_minmax(900px,_1fr)]': !store.menu.open,
            'grid-rows-[1fr_200px]': loadedPattern,
            'grid-rows-[1fr_0]': !loadedPattern,
        }"
        data-draggable="patternLibrary"
        data-draggable-cols-initial="240"
        data-draggable-rows-initial="300"
        data-draggable-handle-size="6"
        data-draggable-cols-max="350"
        data-draggable-cols-min="200"
        :data-draggable-template-cols="(store.menu.open ? '<value> 1fr' : '10px 1fr')"
        :data-draggable-template-rows="(!!loadedPattern ? '1fr <value>' : '1fr 0')"
    >
        <div
            id="braid-menu"
            class="braid-menu flex flex-col relative transition-opacity select-none border-r border-r-neutral-400 overflow-x-auto"
            :class="{
                'opacity-0 pointer-events-none': !store.menu.open,
                'opacity-100': store.menu.open,
            }"
        >
            <header class="flex items-start min-h-[50px]">
                <h1
                    class="overflow-auto p-2 text-3xl font-bold self-start text-primary-900 dark:text-primary-200"
                >
                    <button
                        @click="switchPattern('__braid.welcome')"
                        class="text-left hover:underline underline-offset-2 break-words hyphens-auto max-w-full"
                    >
                        @if(config('braid.logo'))
                            {{ config('braid.logo') }}
                        @else
                            <svg viewBox="0 0 579 203" xmlns="http://www.w3.org/2000/svg" class="logo h-[35px] w-[100px] fill-accent-800 dark:fill-accent-200" aria-label="Braid">
                                <title>Braid</title>
                                <path d="M195.75 52.5187H230.15C241.457 52.5187 249.883 55.0253 255.43 60.0387C260.977 65.052 263.75 71.292 263.75 78.7587C263.75 90.812 257.617 99.1853 245.35 103.879C252.07 105.052 257.67 107.825 262.15 112.199C266.63 116.465 268.87 122.119 268.87 129.159C268.977 139.292 265.617 147.239 258.79 152.999C252.07 158.652 242.79 161.479 230.95 161.479H190.63C190.737 159.772 190.843 158.439 190.95 157.479C191.163 156.519 191.643 155.612 192.39 154.759C193.243 153.905 194.417 153.425 195.91 153.319L202.63 152.679V61.4787L190.95 60.5187C190.843 59.8787 190.897 58.7587 191.11 57.1587C191.643 54.0653 193.19 52.5187 195.75 52.5187ZM216.71 60.9987V101.319H222.63C231.91 101.319 238.63 99.5053 242.79 95.8787C246.95 92.252 249.03 86.9187 249.03 79.8787C249.03 72.8387 246.79 67.7187 242.31 64.5187C237.937 61.3187 231.857 59.9853 224.07 60.5187L217.03 60.9987H216.71ZM254.31 130.919C254.31 122.919 251.91 117.265 247.11 113.959C242.31 110.545 234.79 108.892 224.55 108.999L216.71 109.159V152.519L226.95 152.679C245.19 152.999 254.31 145.745 254.31 130.919ZM304.969 93.3187C308.062 89.9053 311.955 86.8653 316.649 84.1987C321.449 81.4253 325.395 80.0387 328.489 80.0387C331.689 80.0387 334.302 80.892 336.329 82.5987C338.355 84.3053 339.369 87.3987 339.369 91.8787C339.369 96.3587 338.249 99.8253 336.009 102.279C334.409 103.559 331.955 104.039 328.649 103.719C328.649 95.932 326.622 92.0387 322.569 92.0387C317.449 92.0387 311.689 95.612 305.289 102.759V152.839L318.729 153.799C319.262 158.919 317.502 161.479 313.449 161.479H280.009V160.199C280.009 159.132 280.275 157.959 280.809 156.679C281.555 154.759 283.155 153.692 285.609 153.479L291.689 153.159V92.0387L283.529 91.2387C280.969 90.9187 279.689 88.4653 279.689 83.8787L303.369 80.8387L304.489 93.3187H304.969ZM418.724 155.879C418.724 161.319 415.15 164.039 408.004 164.039C400.964 164.039 396.697 160.892 395.204 154.599C388.27 160.785 380.59 163.879 372.164 163.879C363.844 163.879 357.497 161.959 353.124 158.119C348.75 154.279 346.564 149.052 346.564 142.439C346.564 135.825 349.017 130.279 353.924 125.799C358.937 121.319 367.15 119.079 378.564 119.079C384.324 119.079 389.657 119.665 394.564 120.839V109.799C394.564 96.3587 388.91 89.6387 377.604 89.6387C372.484 89.6387 368.644 91.1853 366.084 94.2787C363.63 97.2653 362.297 100.839 362.084 104.999C358.99 105.319 356.43 104.785 354.404 103.399C352.377 102.012 351.364 99.7187 351.364 96.5187C351.364 91.8253 353.764 87.932 358.564 84.8387C363.47 81.6387 369.817 80.0387 377.604 80.0387C383.684 80.0387 388.644 80.9453 392.484 82.7587C396.324 84.572 399.257 86.492 401.284 88.5187C405.87 93.3187 408.164 100.145 408.164 108.999V154.599L418.724 155.879ZM394.564 131.079C389.87 128.839 384.644 127.719 378.884 127.719C373.124 127.719 368.75 128.892 365.764 131.239C362.777 133.479 361.284 136.679 361.284 140.839C361.284 144.892 362.51 148.092 364.964 150.439C367.417 152.679 370.884 153.799 375.364 153.799C382.404 153.799 388.804 151.345 394.564 146.439V131.079ZM460.134 161.479H428.134V160.199C428.134 159.132 428.4 157.959 428.934 156.679C429.68 154.759 431.28 153.692 433.734 153.479L439.974 153.159V91.3987L432.294 90.5987C429.307 90.2787 427.814 87.7187 427.814 82.9187L453.574 80.0387V152.839L465.414 153.799C465.947 158.919 464.187 161.479 460.134 161.479ZM451.974 66.7587C450.267 68.3587 448.08 69.1587 445.414 69.1587C442.747 69.1587 440.56 68.3587 438.854 66.7587C437.147 65.052 436.294 62.8653 436.294 60.1987C436.294 57.532 437.147 55.3453 438.854 53.6387C440.56 51.932 442.747 51.0787 445.414 51.0787C448.08 51.0787 450.267 51.932 451.974 53.6387C453.68 55.3453 454.534 57.532 454.534 60.1987C454.534 62.8653 453.68 65.052 451.974 66.7587ZM555.146 155.559C554.933 161.105 551.146 163.879 543.786 163.879C536.533 163.879 532.426 160.305 531.466 153.159C523.893 160.305 515.679 163.879 506.826 163.879C498.079 163.879 490.666 160.625 484.586 154.119C478.506 147.612 475.359 137.745 475.146 124.519C474.933 111.292 478.186 100.572 484.906 92.3587C491.626 84.1453 501.226 80.0387 513.706 80.0387C519.999 80.0387 525.866 81.3187 531.306 83.8787V60.6787L523.466 59.8787C520.266 59.5587 518.826 56.9987 519.146 52.1987L544.746 48.9987V154.439L555.146 155.559ZM531.306 97.4787C525.759 92.4653 519.146 89.9587 511.466 89.9587C503.786 89.9587 498.186 93.052 494.666 99.2387C491.146 105.319 489.386 112.945 489.386 122.119C489.386 131.292 491.199 138.759 494.826 144.519C498.559 150.279 503.839 153.159 510.666 153.159C517.493 153.159 524.373 150.012 531.306 143.719V97.4787Z"/>
                                <path d="M104.295 14.1859C198.576 93.0308 114.528 105.946 138.667 188.008C110.008 144.265 101.514 124.659 99.1707 112.712C81.9977 67.5246 91.6086 41.0328 104.295 14.1859Z"/>
                                <path d="M21.0032 52.9479C116.055 56.7884 93.7885 113.586 138.667 188.008C72.7558 134.142 17.0135 155.182 21.0032 52.9479Z"/>
                            </svg>
                        @endif
                    </button>
                </h1>

                <button
                    class="shrink-0 ml-auto mr-2 p-1 mt-2 hover:bg-slate-200/50 rounded"
                    data-tooltip="Close menu"
                    @click="store.menu.open = !store.menu.open"
                >
                    @svg('heroicon-o-arrow-left-start-on-rectangle', 'w-6 h-6')
                    <span class="sr-only">Close menu</span>
                </button>
            </header>

            <x-braid::search.form/>

            <menu
                class="h-full w-full flex-1"
                @scroll="onMenuScroll"
                :class="{
                    'overflow-y-auto': store.menu.open,
                    'overflow-hidden': !store.menu.open,
                    'border-t-2 border-t-primary-200/40': store.menuScrolled
                }"
            >
                <template x-if="!store.search.open">
                    @include('braid::partials.menu', [
                        'dir' => $patternFiles,
                        'depth' => 0
                    ])
                </template>

                <template x-if="store.search.open">
                    <x-braid::search.results/>
                </template>

                <button
                    x-show="store.menu.open"
                    data-draggable-handle="patternLibrary"
                    data-draggable-type="cols"
                    class="absolute top-0 right-0 bottom-0 w-[6px] opacity-0 hover:opacity-100 bg-accent-300 dark:bg-accent-600 cursor-ew-resize flex items-center justify-center"
                    title="Resize menu"
                ><span class="h-[20px] bg-neutral-600 dark:bg-neutral-100 w-[1px]"></span></button>
            </menu>
        </div>

        <div
            id="braid-content"
            class="braid-content flex flex-col relative h-full w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800"
        >
            @include('braid::partials.toolbar')

            <x-braid::elements.ruler/>

            <div x-ref="patternCanvas" class="flex flex-col flex-1 min-h-0 max-w-full relative overflow-x-auto bg-accent-100 dark:bg-neutral-700">
                <div
                    x-ref="patternCanvasOuter"
                    class="relative flex-1 w-full h-full resize-x border-[3px] border-accent-100 dark:border-accent-400 hover:border-accent-200 dark:hover:border-accent-300 overflow-auto"
                >
                    <template x-if="store.active">
                        <iframe
                            src="about:blank"
                            class="z-0 w-full h-full bg-white data-[disabled]:opacity-70 data-[disabled]:grayscale"
                            x-ref="patternCanvasFrame"
                        ></iframe>
                    </template>
                </div>
            </div>
        </div>

        <div x-show="loadedPattern" class="braid-tools overflow-hidden">
            @include('braid::patterntools.index')
        </div>
    </div>
@endsection
