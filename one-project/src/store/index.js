import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '杭州'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}


export default new Vuex.Store({
    state: {
        // city: localStorage.city || '杭州'
        city: defaultCity
    },
    actions: {
        //这里ctx当前上下文,是为什么???
        changeCity(ctx, city) {
            // 这里为何非要用actions这一步,查的是跟异步操作有关系,先放过
            ctx.commit('changeCity', city)
        }
    },
    mutations: {
        changeCity(state, city) {
            state.city = city
            try {
                localStorage.city = city
            } catch (e) {}
            
        }
    }
})

