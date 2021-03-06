// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'


require('swiper/dist/css/swiper.css')
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'

Vue.config.productionTip = false

// fastclick 的使用
// fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //使用Vuex
  store,
  meta: {
    keepAlive: true
  },
  components: { App },
  template: '<App/>'
})
