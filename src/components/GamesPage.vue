<template>
    <div class="game-content">
        <div v-bind:class="'game game' + (index%2+1)" v-for="(game, index) in games" v-bind:key="'G'+index">
            <div class="game-main">
                <img class="game-main-img" v-bind:src="'games_page/' + game.mainImage">
                <div class="game-text">
                    <h2 class="game-title">{{game.title}}</h2>
                    <p class="game-description" v-html="game.description"></p>
                </div>
            </div>
            <hr>
            <div class="game-other">
                <div v-for="pic in game.additional" v-bind:key="pic.id">
                    <a v-bind:href="'games_page/' + pic.picture" target="_blank">
                        <div class="icon-base faded-icon" 
                            v-bind:style="{'background-image': 'url(/games_page/'+pic.icon+')'}">
                        </div>
                    </a>
                    <p v-html="pic.note"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'GamesPage',

    data() {
        return {
            games: []
        }
    },

    created() {
        this.loadGames();
    },

    methods: {
        loadGames() {
            Axios.get('/games_page/content.json?_=' + new Date().getTime()).then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.games.push(response.data[i]);
                }
            });
        }
    }

}
</script>

<style scoped>
.game-content {
    margin: 50px 0px 0px 0px;
}

.game {
    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 8px;

    padding: 25px 5px 5px 5px;
    margin: 0px 50px 50px 50px;

    box-shadow: 0px 0px 15px 5px #35261a41;

    display: grid;
    grid-template-rows: auto auto auto;
    grid-gap: 15px;
}

@media only screen and (max-width: 1000px) {
    .game-content {
        margin: 20px 0px 0px 0px
    }

    .game {
        margin: 0px 20px 20px 20px;
    }
}

@media only screen and (max-width: 800px) {
    .game-content {
        margin: 10px 0px 0px 0px
    }

    .game {
        margin: 0px 10px 10px 10px;
    }
}

.game1 {
    background-color: #f1d7c698;
}

.game2 {
    background-color: #d4854559;
}

.game-main {
    display: grid;
    margin: 0px 20px 0px 20px;
    grid-template-columns: auto;
    text-align: center;
    margin: auto;
}

.game-main-img {
    display: block;
    margin: auto;
    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 3px #35261a93;
}

@media only screen and (max-width: 550px) {
    .game-main-img {
        display: block;
        margin: auto;
        width: 240px;
        height: 180px;
    }
}

.game-text {
    margin: 20px;
    text-align: center;
}

.game-title {
    font-size: 34px;
}

.game-description {
    text-align: center;
}

.game-other {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 10px;
    margin: auto;
    padding: 10px 0px;
    text-align: center;
}

@media only screen and (max-width: 800px) {
    .game-other {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 550px) {
    .game-other {
        grid-template-columns: 220px;
    }
}

.other-content {
    background-color: #2e1808;
    width: 200px;
    height: 200px;
    border: 1px solid;
    border-color: black;
}
</style>
