<template>
    <div class="recipe-content">
        <p class="main-back" v-on:click="back()">Vissza</p>
        <div class="recipe-text">
            <h2 class="recipe-title centered">{{recipeData.title}}</h2>
            <div>
                <div v-for="item in recipeData.description" v-bind:key=item.id>
                    <p class="recipe-main-p" v-if="item.type == 'p'" v-html="item.data"></p>
                    <p class="recipe-main-p_justify" v-if="item.type == 'p_justify'" v-html="item.data"></p>
                    <h3 class="recipe-main-h3" v-if="item.type == 'h3'" v-html="item.data"></h3>
                    <img class="recipe-main-img" v-if="item.type == 'img'" v-bind:src="'recipes_page/' + item.data">
                    <div v-if="item.type == 'spacing'" v-bind:style="{height: item.data}"></div>
                </div>
            </div>
        </div>
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
                description: []
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

.recipe-text {
    display: block;

    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 8px;

    padding: 15px 100px 25px 100px;
    margin: 0px 50px 50px 50px;

    box-shadow: 0px 0px 15px 5px #35261a41;
    background-color: #f1d7c698;
}

@media only screen and (max-width: 1000px) {
    .recipe-text {
        padding: 15px 50px 25px 50px;
        margin: 0px 20px 20px 20px;
    }
}

@media only screen and (max-width: 800px) {
    .recipe-text {
        padding: 15px 20px 25px 20px;
        margin: 0px 10px 10px 10px;
    }
}

.recipe-title {
    padding: 10px 0px 10px 0px;
    margin: 0px auto 20px auto;
}

.recipe-main-p {
    font-family: "Courgette";
    font-size: 18px;
    color: #2e1808;
}

.recipe-main-p_justify {
    font-family: "Courgette";
    font-size: 18px;
    text-align: justify;
    color: #2e1808;
}

.recipe-main-h3 {
    font-family: "Courgette";
    font-size: 24px;
    margin: 10px 0px;
    color: #2e1808;
}

.recipe-main-img {
    display: inline-block;
    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 5px #35261a93;
    margin: 10px 0px 10px 0px;
    max-width: 620px;
}

@media only screen and (max-width: 1000px) {
    .recipe-main-img {
        max-width: 550px;
    }
}

@media only screen and (max-width: 800px) {
    .recipe-main-img {
        max-width: 420px;
    }
}

@media only screen and (max-width: 550px) {
    .recipe-main-img {
        max-width: 280px;
    }
}

@media only screen and (max-width: 420px) {
    .recipe-main-img {
        max-width: 220px;
    }
}

</style>
