<template>
  <div class="list" ref="wrapper">
    <div>

      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

       <div class="area" v-for="(item, key) of cities" :key="key" :ref="key" >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
              {{ innerItem.name }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import Bscroll from 'better-scroll'
import { mapMutations, mapState} from 'vuex'

    export default {  
        name: 'CityList',
        props: { 
            hot: Array,
            cities: Object,
            letter: String
        },
        computed: {
          ...mapState({
            currentCity: 'city'
          })
        },
        //本组件 监听letter变量, 每次改变都运行函数
        watch: {
            letter() {
                if (this.letter) {
                    // let element = this.$refs[this.letter]   //教程讲,这里拿到是个数组, 由于数据存储的时候abc当做数组存储在里面
                    // 而绑定ref时候是key 一个变量,拿到的就直接
                    let element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
                console.log(this.letter)
            }
        },
        methods: {
          handleCityClick (city) {
            console.log(city)
            //这里只能是触发一个changeCity事件,并没有直接修改内容
            // this.$store.dispatch('changeCity', city)
            // 这里直接commit修改state种的内容也可以
            // this.$store.commit('changeCity', city)
            
            //下面做了函数的映射,就可以这样用了
            this.changeCity(city)

            this.$router.push('/')
          },
          ...mapMutations(['changeCity'])
        },
        mounted() { //这个必须是页面元素超出了一个屏幕了,才能看到效果
            this.scroll = new Bscroll(this.$refs.wrapper, {
              click: true //解决移动以后不能点击的情况
            })
            
        },
    }
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
</style>
