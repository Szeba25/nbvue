<template>
    <div class="recipe-content">
        <img src="@/assets/design/back_button.png" class="recipe-back" v-on:click="back()">
        <h2 class="recipe-title centered">{{recipeData.title}}</h2>
        <div v-html="recipeData.description"></div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'RecipePage',

    data() {
        return {
            currentRecipe: "",
            recipeData: {
                title: "",
                description: ""
            }
        }
    },

    created() {
        this.loadRecipe(this.$route.params.recipe);
    },

    watch: {
        '$route.params.recipe'(recipe) {
            this.loadRecipe(recipe);
        }
    },

    methods: {
        loadRecipe(recipe) {
            this.currentRecipe = recipe;
            Axios.get('/recipes_page/recipes/' + recipe + '.json?_=' + new Date().getTime()).then((response) => {
                this.recipeData = response.data;
            });
        },
        
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.recipe-content {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
    text-align: center;
}

.recipe-back {
    cursor: pointer;
    margin: 25px auto 15px auto;
}

.recipe-title {
    padding: 10px 0px 10px 0px;
    margin: 0px auto 20px auto;
}
</style>
