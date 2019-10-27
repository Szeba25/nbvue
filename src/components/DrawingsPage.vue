<template>
    <div v-if="selectedYear">
        <div class="drawingspage-pictures-content">
            <h2 class="drawings-title centered">{{selectedYear}}. év</h2>
            <router-link class="drawings-back" to="select">Vissza</router-link>
            <div class="drawings-pictures">
                <div v-for="pic in pictures" v-bind:key="pic.id">
                    <a v-bind:href=pic.picture target="_blank">
                        <div class="icon-base faded-icon" 
                            v-bind:style="{'background-image': 'url(/'+pic.picture+')'}">
                        </div>
                    </a>
                    <p class="drawings-note"><span v-html=pic.note></span></p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="drawingspage-years-content">
            <h2 class="drawings-title centered">Válassz évet!</h2>
            <div class="drawings-years">
                <router-link class="icon-base faded-icon" 
                    v-bind:style="{'background-image': 'url(/'+yr.picture+')'}" 
                    v-for="yr in years" 
                    v-bind:key="yr.id" 
                    :to="yr.year">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'DrawingsPage',

    watch: {
        '$route.params.year'(year) {
            if (year != "select") {
                this.selectYear(year);
            } else {
                this.selectedYear = "";
                this.loadYears();
            }
        }
    },

    data() {
        return {
            years: [],
            selectedYear: "",
            pictures: []
        }
    },

    created() {
        let year = this.$route.params.year;
        if (year != "select") {
            this.selectYear(year);
        } else {
            this.selectedYear = "";
            this.loadYears();
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
        },

        loadYears() {
            this.years = [];
            Axios.get('/drawings_page/years.json').then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    this.years.push(response.data[i]);
                }
            });
        }
    }
};
</script>

<style>
.drawingspage-years-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-title {
    padding: 30px 0px 10px 0px;
}

.drawings-years {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    margin: 0px auto 30px auto;
}

.drawingspage-pictures-content {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-pictures {
    display: grid;
    grid-template-columns: 220px 220px;
    grid-auto-rows: 320px;
    grid-row-gap: 10px;
    grid-column-gap: 50px;
    margin: 0px auto 80px auto;
}

.drawings-back {
    font-family: "Monotype Corsiva";
    text-align: center;
    cursor: pointer;
    text-decoration: underline;
    color: #2e1808;
    font-size: 24px;
    margin: 5px 0px 22px 0px;
}

.drawings-note {
    text-align: center;
    margin: 10px 30px 10px 30px;
}
</style>
