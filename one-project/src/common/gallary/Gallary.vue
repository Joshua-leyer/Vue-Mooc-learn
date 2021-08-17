<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommonGallary",
        props: {
            imgs: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    //父元素传过来的数据改变的时候自动刷新,
                    observeParents: true,
                    observer: true
                }
            }
        },
        methods: {
            handleGallaryClick () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        //这里的数值要比header.vue中的 header-fixed 内容的z-index大, 自己可以试一试不然会有什么效果
        z-index: 425
        position: fixed
        left: 0
        right: 0
        top:0
        bottom: 0
        background: #000
        .wrapper
            height: 0
            width 100%
            padding-bottom: 100%
            // background: #fff
            .gallary-img
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>