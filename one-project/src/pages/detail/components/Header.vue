<template>
    <div>
        <router-link  tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont back-icon">&#xe677;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/" >
                <span class="iconfont header-fixed-back">&#xe677;</span>
            </router-link>   
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailHeader',
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                let top = document.documentElement.scrollTop
                // top > 60 ? this.showAbs = false : this.showAbs = true
                if (top > 60) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity  //保证opacity最大值只能是1,先做3目运算,最后赋值,自己查点搞混了
                    console.log(opacity)
                    this.opacityStyle = { opacity }
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
                // console.log(document.documentElement.scrollTop)
            }
        },
        //这里能使用,必须使用keep-alive 标签
        /// ?? 查的是讲, 当网页第一次进入就会执行,,监听事件写在 mounted也可以.
        activated () { 
            //监听网页滚动事件
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style lang="stylus" scoped>
    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        //居中
        line-height: .8rem
        border-radius: .4rem

        text-align: center
        background: rgba(0, 0, 0, .8)
        .back-icon 
            color: #fff
            font-size: .4rem

@import '~style/varibles.styl'
    .header-fixed
        z-index: 424
        position: fixed
        top: 0
        left: 0
        right: 0
        overflow: hidden
        height: .86rem
        line-height: .86rem
        text-align: center 
        color: #fff
        background: $bgColor
        .header-fixed-back
            position: absolute
            top:0
            left:0
            width: .64rem
            text-align: center 
            font-size: .4rem
            color: #fff
</style>