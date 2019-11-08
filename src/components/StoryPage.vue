<template>
    <div class="story-content">
        <img src="@/assets/design/back_button.png" class="story-back" v-on:click="back()">
        <div class="story-text">
            <h2 class="story-title centered">{{storyData.title}}</h2>
            <div>
                <div v-for="item in storyData.description" v-bind:key=item.id>
                    <p class="story-main-p" v-if="item.type == 'p'" v-html="item.data"></p>
                    <h3 class="story-main-h3" v-if="item.type == 'h3'" v-html="item.data"></h3>
                    <img class="story-main-img" v-if="item.type == 'img'" v-bind:src="'stories_page/' + item.data">
                </div>
            </div>
        </div>
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
                description: []
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

.story-text {
    display: block;

    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 8px;

    padding: 15px 5px 25px 5px;
    margin: 0px 50px 50px 50px;

    box-shadow: 0px 0px 15px 5px #35261a41;
    background-color: #f1d7c698;
}

@media only screen and (max-width: 1000px) {
    .story-text {
        margin: 0px 20px 20px 20px;
    }
}

@media only screen and (max-width: 800px) {
    .story-text {
        margin: 0px 10px 10px 10px;
    }
}

.story-title {
    padding: 10px 0px 10px 0px;
    margin: 0px auto 20px auto;
}

.story-main-p {
    font-family: "Courgette";
    font-size: 18px;
    color: #2e1808;
}

.story-main-h3 {
    font-family: "Courgette";
    font-size: 24px;
    margin: 10px 0px;
    color: #2e1808;
}

.story-main-img {
    display: inline-block;
    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 3px #35261a93;
    margin: 10px 0px 10px 0px;
}

@media only screen and (max-width: 1000px) {
    .story-main-img {
        max-width: 650px;
    }
}

@media only screen and (max-width: 800px) {
    .story-main-img {
        max-width: 420px;
    }
}

@media only screen and (max-width: 550px) {
    .story-main-img {
        max-width: 320px;
    }
}

@media only screen and (max-width: 420px) {
    .story-main-img {
        max-width: 240px;
    }
}

</style>
