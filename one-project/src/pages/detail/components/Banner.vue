<template>
    <div>
        
    <div class="banner" @click="handleBannerClick">
        <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/fafe9394-8e5f-4ca9-b284-0cde9e516723.jpg_r_640x420x95_f5bdfb68.jpg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">大连理工奥特曼</div>
            <div class="banner-number banner-icon"><span class="iconfont">&#xe666;</span>39</div>
        </div>
    </div>

    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>

    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

    export default {
        name: 'DetailBanner',
        data() {
            return {
                showGallary: false,
                imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/9ef888c0-5965-446b-9a8f-63d1e92f45b1.jpg_r_640x420x95_5da3bbf1.jpg',
                    'https://img1.qunarzz.com/p/tts9/1805/b2/08041ff281e73c02.jpg_r_640x420x95_5ff6dc3b.jpg']
            }
        },
        methods: {
            handleBannerClick () {
                this.showGallary = true
            },
            handleGallaryClose () {
                this.showGallary = false
            }
        },
        components: {
            CommonGallary
        }
    }
</script>

<style lang="stylus" scoped>
 // 作者的这个css写法学习
    .banner
        position: relative
        
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0) ,rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex:1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .8)
                font-size: .24rem
                .banner-icon
                    font-size: .2rem

</style>