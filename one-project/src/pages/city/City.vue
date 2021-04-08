<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'


    export default {
        name: 'City',
        components: {
            CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data () {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/static/mock/city.json')
                    .then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc (res) {
                console.log(res)
                res = res.data
                if (res.ret && res.data) {
                    let data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            },
            //当alphabet 组件发出change事件, 就拿到letter时间(点击或者拖动的字母)
            handleLetterChange (letter) {
                this.letter = letter
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>