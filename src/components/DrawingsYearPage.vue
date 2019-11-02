<template>
    <div class="drawings-pictures-content">
        <h2 class="drawings-pictures-title centered">{{selectedYear}}</h2>
        <router-link class="drawings-back" to="/drawings">Vissza</router-link>
        <div class="drawings-pictures">
            <div v-for="pic in pictures" v-bind:key="pic.id">
                <a v-bind:href=pic.picture target="_blank">
                    <div class="icon-base faded-icon" 
                        v-bind:style="{'background-image': 'url(/'+pic.picture+')'}">
                    </div>
                </a>
                <p class="drawings-note" v-html="pic.note"></p>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: "DrawingsYearPage",

    data() {
        return {
            selectedYear: "",
            pictures: []
        }
    },

    created() {
        this.selectYear(this.$route.params.year);
    },

    watch: {
        '$route.params.year'(year) {
            this.selectYear(year);
        }
    },

    methods: {
        selectYear(year) {
            this.selectedYear = year;
            this.pictures = [];
            Axios.get('/drawings_page/year_' + this.selectedYear + '.json').then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.pictures.push(response.data[i]);
                }
            });
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

.drawings-note {
    font-family: "Courgette";
    text-align: center;
    margin: 15px 5px 10px 5px;
}

</style>
