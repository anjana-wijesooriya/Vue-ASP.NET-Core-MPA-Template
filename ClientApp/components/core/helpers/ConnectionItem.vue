<template>
<li>
    <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
        <div class="peer mR-15">
            <img class="w-3r bdrs-50p" :src="connectionbox.imgPath" alt="">
        </div>
        <div class="peer peer-greed">
            <div>
                <div class="peers jc-sb fxw-nw mB-5">
                    <div class="peer">
                        <p class="fw-500 mB-0">{{connectionbox.name}}</p>
                    </div>
                    <div class="peer">
                        <small class="fsz-xs">{{connectionbox.time}}</small>
                    </div>
                </div>
                <span class="c-grey-600 fsz-sm">
                {{connectionbox.title}}
                </span>
            </div>
        </div>
    </a>
</li>
</template>
<script>
export default {
    name: 'connection-box',
    props: {
        connectionbox: {
            type: Object,
            default: {}
        }
    },
    methods: {}
}
</script>