<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--  tag 属性 解决默认渲染是a标签,会有a标签样式的问题 -->
      <router-link
        tag="li" 
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data() {
      return {
        // recommendList: [{
        //     id:'001',
        //     imgUrl:'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
        //     title: '大连理工老高',
        //     desc: '浪漫的大连首站,,,,'
        // }, {
        //     id: '002',
        //     imgUrl:'https://img1.qunarzz.com/sight/p0/1505/f0/f04df22f36d4dc25.water.jpg_256x160_e750d6ec.jpg',
        //     title:'普京大帝',
        //     desc: '普京骑大熊'
        // }]
      }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
