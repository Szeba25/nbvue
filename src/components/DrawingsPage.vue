<template>
    <div class="drawings-years-content">
        <h2 class="drawings-years-title centered">Válassz évet!</h2>
        <div class="drawings-years">
            <router-link class="icon-base faded-icon" 
                v-bind:style="{'background-image': 'url(/'+yr.picture+')'}" 
                v-for="yr in years" 
                v-bind:key="yr.id" 
                :to="'/drawings/' + yr.year">
            </router-link>
        </div>
        <div class="drawings-years-mobile">
            <router-link class="icon-base faded-icon" 
                v-bind:style="{'background-image': 'url(/'+yr.picture+')'}" 
                v-for="yr in years" 
                v-bind:key="yr.id" 
                :to="'/drawings/' + yr.year">
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
            years: []
        }
    },

    created() {
        this.loadYears();
    },

    methods: {
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

<style scoped>
.drawings-years-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-years-title {
    padding: 30px 0px 10px 0px;
}

.drawings-years {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    margin: 0px auto 30px auto;
}

.drawings-years-mobile {
    display: none;
    grid-template-columns: 220px;
    grid-gap: 30px;
    margin: 0px auto 30px auto;
}

@media only screen and (max-width: 900px) {
    .drawings-years {
        display: none;
    }

    .drawings-years-mobile {
        display: grid;
    }
}
</style>
