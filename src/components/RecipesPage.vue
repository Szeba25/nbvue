<template>
    <div class="recipes-content">
        <h2 class="recipes-title centered">Receptek</h2>
        <div class="recipes-list">
            <router-link v-for="recipe in recipes" v-bind:key="recipe.id" v-bind:to="'recipes/' + recipe.page"><p class="recipe">{{recipe.title}}</p></router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'RecipesPage',

    data() {
        return {
            recipes: []
        }
    },

    created() {
        this.loadRecipes();
    },

    methods: {
        loadRecipes() {
            this.recipes = [];
            Axios.get('/recipes_page/content.json?_=' + new Date().getTime()).then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.recipes.push(response.data[i]);
                }
            });
        }
    }
}
</script>

<style scoped>
.recipes-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.recipes-title {
    padding: 30px 0px 30px 0px;
    margin: 0px 30px;
}

.recipes-list {
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
    .recipes-list {
        margin: 0px 100px 50px 100px;
    }
}

@media only screen and (max-width: 800px) {
    .recipes-list {
        margin: 0px 50px 50px 50px;
    }
}

@media only screen and (max-width: 550px) {
    .recipes-list {
        margin: 0px 15px 50px 15px;
    }
}

.recipe {
    font-size: 22px;
    margin: 15px 30px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.recipe:hover {
    color: #d48545;
    transform: translateX(3px);
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>
