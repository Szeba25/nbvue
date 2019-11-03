<template>
    <div class="creative-content">
        <h2 class="creative-title centered">{{message}}</h2>
        <div class="creative">
            <router-link class="icon-base faded-icon" 
                v-bind:style="{'background-image': 'url(/creative_page/'+category.icon+')'}" 
                v-for="category in categories" 
                v-bind:key="category.id" 
                :to="'/creative/' + category.page">
                <div class="faded-icon-label centered">{{category.label}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'CreativePage',

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
            Axios.get('/creative_page/categories.json').then((response) => {
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
.creative-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.creative-title {
    padding: 30px 0px 30px 0px;
}

.creative {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    margin: 0px auto 30px auto;
}

@media only screen and (max-width: 800px) {
    .creative {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 550px) {
    .creative {
        grid-template-columns: 220px;
    }
}
</style>
