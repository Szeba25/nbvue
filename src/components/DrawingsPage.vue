<template>
    <div v-if="selectedYear">
        <div class="drawingspage-content">
            <h2 class="drawings-title centered">{{selectedYear}}. év</h2>
            <div class="drawings-pictures">
                <div><div class="faded-icon"></div><p class="drawings-note">Beautiful picture 1</p></div>
                <div><div class="faded-icon"></div><p class="drawings-note">Beautiful picture 2</p></div>
                <div><div class="faded-icon"></div><p class="drawings-note">Beautiful picture 3 with a very very long note!<br>and a break!</p></div>
                <div><div class="faded-icon"></div><p class="drawings-note">Beautiful picture 4</p></div>
                <div><div class="faded-icon"></div><p class="drawings-note">Beautiful picture 5</p></div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="drawingspage-content">
            <h2 class="drawings-title centered">Válassz évet!</h2>
            <div class="drawings-years">
                <div class="faded-icon" v-bind:style="{'background-image': 'url(/'+item.picture+')'}" v-for="item in years" v-bind:key="item.id" v-on:click="selectYear(item.year)"></div>
                {{selectedYear}}
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'DrawingsPage',

    data() {
        return {
            years: [],
            selectedYear: ""
        }
    },

    created() {
        Axios.get('/drawings_page/years.json').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                this.years.push(response.data[i]);
            }
        });
    },

    methods: {
        resetYear() {
            this.selectYear("");
        },

        selectYear(year) {
            this.selectedYear = year;
        }
    }
};
</script>

<style>
.drawingspage-content {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.drawings-title {
    padding: 30px 0px 15px 0px;
}

.drawings-years {
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    margin: 0px auto 30px auto;
}

.drawings-pictures {
    display: grid;
    grid-template-columns: 220px 220px;
    grid-auto-rows: 320px;
    grid-row-gap: 10px;
    grid-column-gap: 50px;
    margin: 0px auto 80px auto;
}

.drawings-note {
    text-align: center;
    margin: 10px 30px 10px 30px;
}
</style>
