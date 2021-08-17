<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe677;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe615;</span>
            请输入内容或地名
        </div>
        <router-link to='/city'>
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont arrow-icon">&#xe60a;</span>
            </div>
        </router-link>
    </div>
</template>

<script> 
//没搞明白这个是如何拿到数据的??? >done　keyword  :mapState 辅助函数  , vuex官网有提到
import { mapState } from 'vuex'

export default {

    name: 'HomeHeader',
    // props: {
    //     city: String
    // }
    // 使用映射的
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>

//使用变量
    @import '~style/varibles.styl'
    .header
        display: flex 
        line-height: .86rem
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                // text-align: center 无效...
                margin-left: .15rem
                font-size: .4rem
        .header-input 
            flex: 1
            height: .64rem
            line-height .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            // 这里是处理选择地名过长的一个处理
            min-width 1.24rem
            padding: 0 .1rem 

            float: right
            text-align: center
            color: #fff
            .arrow-icon
                font-size: .24rem
</style>