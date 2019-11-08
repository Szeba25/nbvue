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
}

.recipe {
    font-size: 22px;
    margin: 14px 0px;
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
