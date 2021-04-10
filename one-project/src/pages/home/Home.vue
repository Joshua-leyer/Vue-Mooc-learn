<template>
    <div>
    <home-header ></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons  :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    </div>

</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons  from './components/Icons'
import HomeRecommend from './components/Recommend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Home',
    components: {
        HomeHeader, 
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    },
    data () {
        return {
            lastCity: '', //临时缓冲变量的作用,记录上一次选择的地名,用来和本次跳转的时候选择的地名对比
            swiperList: [],
            iconList: [],
            recommendList: []
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get('/static/mock/index.json?city=' + this.city)
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res) {
            res = res.data
            if (res.ret && res.data) {
                let data = res.data

                this.swiperList = data.swiperList
                this.iconList = data.iconList
                this.recommendList = data.recommendList
            }
        }
    },
    mounted() {
        console.log('mounted')
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () { //当页面重新被显示的时候会执行
        console.log('activated')
        // 当两次数据不相等的时候重新发送一下ajax请求
        if (this.lastCity !== this.city) { 
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }

}
</script>

<style>

</style>