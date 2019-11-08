<template>
    <div class="stories-content">
        <h2 class="stories-title centered">Történetek</h2>
        <div class="stories-list">
            <router-link v-for="story in stories" v-bind:key="story.id" v-bind:to="'stories/' + story.page"><p class="story">{{story.title}}</p></router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'StoriesPage',

    data() {
        return {
            stories: []
        }
    },

    created() {
        this.loadStories();
    },

    methods: {
        loadStories() {
            this.stories = [];
            Axios.get('/stories_page/content.json?_=' + new Date().getTime()).then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.stories.push(response.data[i]);
                }
            });
        }
    }
}
</script>

<style scoped>
.stories-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.stories-title {
    padding: 30px 0px 30px 0px;
    margin: 0px 30px;
}

.stories-list {
    text-align: center;
    text-decoration: none;
}

.story {
    font-size: 22px;
    margin: 14px 0px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.story:hover {
    color: #d48545;
    transform: translateX(3px);
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>
