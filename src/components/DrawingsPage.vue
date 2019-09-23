<template>
    <div class="drawingspage-content">
        <h2 class="drawings-title centered">Válassz évet!</h2>
        <div class="drawings-years">
            <div class="faded-icon" v-bind:style="{'background-image': 'url(/'+item.picture+')'}" v-for="item in years" v-bind:key="item.id" @click="showModal=true"></div>
        </div>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">custom header</h3>
        </modal>

    </div>
</template>

<script>
import Axios from 'axios';

import Modal from './Modal.vue';

export default {
    name: 'DrawingsPage',

    data() {
        return {
            showModal: false,
            years: []
        }
    },

    created() {
        Axios.get('/drawings_page/data.json').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                this.years.push(response.data[i]);
            }
        });
    },

    components: {
        Modal
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
</style>
