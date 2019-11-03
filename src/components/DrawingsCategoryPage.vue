<template>
    <div class="drawings-pictures-content">
        <h2 class="drawings-pictures-title centered">{{message}}</h2>
        <p class="drawings-back" v-on:click="back()">Vissza</p>
        <div class="drawings-pictures">
            <div v-for="pic in pictures" v-bind:key="pic.id">
                <a v-bind:href=pic.picture target="_blank">
                    <div class="icon-base faded-icon" 
                        v-bind:style="{'background-image': 'url(/'+pic.icon+')'}">
                    </div>
                </a>
                <p class="drawings-pictures-note" v-html="pic.note"></p>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: "DrawingsCategoryPage",

    data() {
        return {
            selectedCategory: "",
            message: "",
            pictures: []
        }
    },

    created() {
        this.selectCategory(this.$route.params.category);
    },

    watch: {
        '$route.params.category'(category) {
            this.selectCategory(category);
        }
    },

    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
            this.message = "";
            this.pictures = [];
            Axios.get('/drawings_page/category_' + this.selectedCategory + '.json').then((response) => {
                this.message = response.data.message;
                for (let i = 0; i < response.data.pictures.length; i++) {
                    this.pictures.push(response.data.pictures[i]);
                }
            });
        },

        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.drawings-pictures-content {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-pictures-title {
    padding: 30px 0px 10px 0px;
}

.drawings-pictures {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-row-gap: 10px;
    grid-column-gap: 20px;
    margin: 0px auto 80px auto;
}

@media only screen and (max-width: 800px) {
    .drawings-pictures {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 550px) {
    .drawings-pictures {
        grid-template-columns: 220px;
    }
}

.drawings-back {
    font-family: "Courgette";
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    color: #2e1808;
    font-size: 24px;
    margin: 5px 0px 22px 0px;
}

.drawings-pictures-note {
    font-family: "Courgette";
    text-align: center;
    margin: 15px 5px 10px 5px;
}
</style>
