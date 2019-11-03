<template>
    <div class="drawings-content">
        <h2 class="drawings-title centered">{{message}}</h2>
        <div class="drawings">
            <router-link class="icon-base faded-icon" 
                v-bind:style="{'background-image': 'url(/'+category.icon+')'}" 
                v-for="category in categories" 
                v-bind:key="category.id" 
                :to="'/drawings/' + category.page">
                <div class="faded-icon-label centered">{{category.label}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'DrawingsPage',

    data() {
        return {
            message: "",
            categories: []
        }
    },

    created() {
        this.loadCategories();
    },

    methods: {
        loadCategories() {
            this.message = "";
            this.categories = [];
            Axios.get('/drawings_page/categories.json').then((response) => {
                this.message = response.data.message;
                for (let i = 0; i < response.data.categories.length; i++) {
                    this.categories.push(response.data.categories[i]);
                }
            });
        }
    }
}
</script>

<style scoped>
.drawings-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-title {
    padding: 30px 0px 30px 0px;
}

.drawings {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    margin: 0px auto 30px auto;
}

@media only screen and (max-width: 800px) {
    .drawings {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 550px) {
    .drawings {
        grid-template-columns: 220px;
    }
}
</style>
