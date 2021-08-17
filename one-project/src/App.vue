<template>
  <div id="app">

    <!--vue自带的 标签 , 出了Detail页面其他页面都会被缓存-->
     <keep-alive exclude="Detail"> 
       <!-- 现实的是当前路由地址对应的内容 -->
      <router-view />
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
