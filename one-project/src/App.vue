<template>
  <div id="app">

    <!--vue自带的 标签-->
     <keep-alive> 
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
