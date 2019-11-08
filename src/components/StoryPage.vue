<template>
    <div class="story-content">
        <img src="@/assets/design/back_button.png" class="story-back" v-on:click="back()">
        <h2 class="story-title centered">{{storyData.title}}</h2>
        <div v-html="storyData.description"></div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'StoryPage',

    data() {
        return {
            currentStory: "",
            storyData: {
                title: "",
                description: ""
            }
        }
    },

    created() {
        this.loadStory(this.$route.params.story);
    },

    watch: {
        '$route.params.story'(story) {
            this.loadStory(story);
        }
    },

    methods: {
        loadStory(story) {
            this.currentStory = story;
            Axios.get('/stories_page/stories/' + story + '.json?_=' + new Date().getTime()).then((response) => {
                this.storyData = response.data;
            });
        },
        
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.story-content {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
    text-align: center;
}

.story-back {
    cursor: pointer;
    margin: 25px auto 15px auto;
}

.story-title {
    padding: 10px 0px 10px 0px;
    margin: 0px auto 20px auto;
}
</style>
