<template>
    <div class="stories-content">
        <h2 class="stories-title centered">Történetek</h2>
        <div class="stories-list">
            <router-link v-for="(story, index) in stories" v-bind:key="story.id" v-bind:to="'stories/' + story.page">
                <p class="story">{{story.title}}</p>
                <div v-if="index !== stories.length-1" class="spacing"></div>
            </router-link>
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

    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 8px;

    padding: 10px 5px 10px 5px;
    margin: 0px 200px 50px 200px;

    box-shadow: 0px 0px 15px 5px #35261a41;
    background-color: #f1d7c698;
}

@media only screen and (max-width: 1000px) {
    .stories-list {
        margin: 0px 100px 50px 100px;
    }
}

@media only screen and (max-width: 800px) {
    .stories-list {
        margin: 0px 50px 50px 50px;
    }
}

@media only screen and (max-width: 550px) {
    .stories-list {
        margin: 0px 15px 50px 15px;
    }
}

.story {
    font-size: 22px;
    margin: 15px 30px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.story:hover {
    color: #d48545;
    transform: translateX(3px);
    transition: 0.3s;
    transition-timing-function: ease;
}

.spacing {
    margin: 0px 15px;
    background-color: #d48545;
    height: 1px;
}
</style>
