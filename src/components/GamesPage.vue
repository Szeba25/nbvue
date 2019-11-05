<template>
    <div>
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
.game {
    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 8px;

    padding: 15px 15px 15px 15px;
    margin: 20px 20px;
    width: auto;

    box-shadow: 0px 0px 10px 5px #35261a41;

    display: grid;
    grid-template-rows: auto auto auto;
    grid-gap: 10px;
}

.game1 {
    background-color: #f1d7c698;
}

.game2 {
    background-color: #d4854559;
}

.game-main {
    display: grid;
    grid-template-columns: 400px auto;
}

.game-main-img {
    display: grid;
    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 3px #35261a93;
}

@media only screen and (max-width: 800px) {
    .game-main {
        grid-template-columns: auto;
        text-align: center;
    }

    .game-main-img {
        display: block;
        margin: auto;
        width: 320px;
        height: 240px;
    }
}

@media only screen and (max-width: 550px) {
    .game-main-img {
        display: block;
        margin: auto;
        width: 240px;
        height: 180px;
    }
}

@media only screen and (max-width: 420px) {
    .game-main-img {
        display: block;
        margin: auto;
        width: 200px;
        height: 150px;
    }
}

.game-text {
    margin: 20px;
}

/*
.game-title {

}
*/

.game-description {
    text-align: justify;
}

.game-other {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 10px;
    margin: auto;
    text-align: center;
}

@media only screen and (max-width: 800px) {
    .game-other {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 600px) {
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
