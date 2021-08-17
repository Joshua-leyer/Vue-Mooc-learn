<template>
    <ul class="list">
        <li class="item" v-for="item of letters" 
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        computed: {
            letters () {
                let letters = []
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        data () {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            }
        },
        updated() {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            handleLetterClick(e) {
                //向外触发事件 , city组件来监听
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if (this.touchStatus === true) {
                    if (this.timer) {
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout (() => {
                        let touchY = e.touches[0].clientY - 79// 计算得到abc列表offsetTop的值
                        //除以单个字母高度 ,向下取整
                        let index = Math.floor((touchY - this.startY) / 20) 
                        console.log(index)
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index])
                        }
                    }, 8)
                    // console.log(this.$refs['A'] instanceof Array) //true
                    // console.log(typeof this.$refs)  //Object
                    // let startY = this.$refs['A'][0].offsetTop
                    // console.log(startY) //拿到的是整个列表的高度
                    //拿到手指滑动时候当前位置的高度 - 列表的最上面高度

                    
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~style/varibles.styl'

    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>