import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import MainPage from './components/MainPage.vue'
import MainPageSide from './components/MainPageSide.vue'
import StoriesPage from './components/StoriesPage.vue'
import StoriesPageSide from './components/StoriesPageSide.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/', components: { default: MainPage, side: MainPageSide } },
    { path: '/stories', components: { default: StoriesPage, side: StoriesPageSide } }
]

const router = new VueRouter({
    routes: routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
