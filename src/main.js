import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import MainPage from './components/MainPage.vue'
import MainPageSide from './components/MainPageSide.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/', components: { default: MainPage, side: MainPageSide } }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
