<template>
    <div class="creative-pictures-content">
        <p class="creative-back" v-on:click="back()">Vissza</p>
        <h2 class="creative-pictures-title centered">{{message}}</h2>
        <div class="creative-pictures">
            <div v-for="pic in pictures" v-bind:key="pic.id">
                <a v-bind:href="'creative_page/' + pic.picture" target="_blank">
                    <div class="icon-base faded-icon" 
                        v-bind:style="{'background-image': 'url(/creative_page/'+pic.icon+')'}">
                    </div>
                </a>
                <p class="creative-pictures-note" v-html="pic.note"></p>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: "CreativeCategoryPage",

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
            Axios.get('/creative_page/category_' + this.selectedCategory + '.json?_=' + new Date().getTime()).then((response) => {
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
.creative-pictures-content {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.creative-pictures-title {
    padding: 10px 0px 10px 0px;
    margin: 0px auto 20px auto;
}

.creative-pictures {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-row-gap: 10px;
    grid-column-gap: 20px;
    margin: 0px auto 80px auto;
}

@media only screen and (max-width: 800px) {
    .creative-pictures {
        grid-template-columns: 220px 220px;
    }
}

@media only screen and (max-width: 550px) {
    .creative-pictures {
        grid-template-columns: 220px;
    }
}

.creative-back {
    font-family: "Courgette";
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    color: #2e1808;
    font-size: 24px;
    margin: 25px 0px 15px 0px;
}

.creative-pictures-note {
    font-family: "Courgette";
    text-align: center;
    margin: 15px 5px 10px 5px;
}
</style>
