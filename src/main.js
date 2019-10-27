import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import MainPage from './components/MainPage.vue';
import DrawingsPage from './components/DrawingsPage.vue';
import CreativePage from './components/CreativePage.vue';
import GamesPage from './components/GamesPage.vue';
import StoriesPage from './components/StoriesPage.vue';
import RecipesPage from './components/RecipesPage.vue';
import GuestBookPage from './components/GuestBookPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/', components: { default: MainPage } },
    { path: '/drawings/:year', components: { default: DrawingsPage } },
    { path: '/creative', components: { default: CreativePage } },
    { path: '/games', components: { default: GamesPage } },
    { path: '/stories', components: { default: StoriesPage } },
    { path: '/recipes', components: { default: RecipesPage } },
    { path: '/guestbook', components: { default: GuestBookPage } }
];

const router = new VueRouter({
    routes: routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
