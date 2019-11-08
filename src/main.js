import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import MainPage from './components/MainPage.vue';
import DrawingsPage from './components/DrawingsPage.vue';
import DrawingsCategoryPage from './components/DrawingsCategoryPage.vue';
import CreativePage from './components/CreativePage.vue';
import CreativeCategoryPage from './components/CreativeCategoryPage.vue';
import GamesPage from './components/GamesPage.vue';
import StoriesPage from './components/StoriesPage.vue';
import StoryPage from './components/StoryPage.vue';
import RecipesPage from './components/RecipesPage.vue';
import RecipePage from './components/RecipePage.vue';
import GuestBookPage from './components/GuestBookPage.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
    { path: '/', components: { default: MainPage } },
    { path: '/drawings', components: { default: DrawingsPage } },
    { path: '/drawings/:category', components: { default: DrawingsCategoryPage } },
    { path: '/creative', components: { default: CreativePage } },
    { path: '/creative/:category', components: { default: CreativeCategoryPage } },
    { path: '/games', components: { default: GamesPage } },
    { path: '/stories', components: { default: StoriesPage } },
    { path: '/stories/:story', components: { default: StoryPage } },
    { path: '/recipes', components: { default: RecipesPage } },
    { path: '/recipes/:recipe', components: { default: RecipePage } },
    { path: '/guestbook', components: { default: GuestBookPage } }
];

const router = new VueRouter({
    routes: routes,

    scrollBehavior() {
        return { x: 0, y: 0 }
    }

});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
