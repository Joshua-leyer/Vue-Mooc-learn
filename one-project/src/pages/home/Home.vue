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
            swiperList: [],
            iconList: [],
            recommendList: []
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('/static/mock/index.json')
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
        this.getHomeInfo()
    }

}
</script>

<style>

</style>