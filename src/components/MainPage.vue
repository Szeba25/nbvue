<template>
    <div class="mainpage-content">
        <div class="highlights-title centered">
            <h2>Kiemelt tartalmak</h2>
        </div>
        <div class="highlights">
            <router-link to="drawings">
                <div class="highlight-item highlight-item1"><div class="highlight-item-fadein centered">Rajzok</div></div>
            </router-link>
            <router-link to="games">
                <div class="highlight-item highlight-item2"><div class="highlight-item-fadein centered">Játékok</div></div>
            </router-link>
            <router-link to="stories">
                <div class="highlight-item highlight-item3"><div class="highlight-item-fadein centered">Történetek</div></div>
            </router-link>
        </div>
        <div class="main-separator">
            <hr>
        </div>
        <div class="updates-title centered">
            <h2>Friss tartalmak</h2>
        </div>
        <div class="updates">
            <div v-for="(item, index) in updates" v-bind:key="item.id">
                <div v-if="index % 2 == 0" class="updates-div">
                    <router-link v-bind:to=item.link>
                        <img class="updates-picture" v-bind:src=item.picture width=318px height=238px>
                    </router-link>
                    <div class="description-bkg"><div class="updates-description">{{item.description}}</div></div>
                </div>
                <div v-else class="updates-div">
                    <div class="description-bkg"><div class="updates-description">{{item.description}}</div></div>
                    <router-link v-bind:to=item.link>
                        <img class="updates-picture" v-bind:src=item.picture width=318px height=238px>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'MainPage',

    data() {
        return {
            updates: []
        }
    },

    created() {
        Axios.get('/main_page/data.json').then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                this.updates.push(response.data[i]);
            }
        });
    }
}
</script>

<style scoped>
.mainpage-content {
    display: grid;
    grid-template-rows: min-content 200px min-content min-content auto;
    grid-gap: 0px;
    padding: 0px;
}

.highlights-title {
    padding: 30px 0px 15px 0px;
}

.highlights {
    margin: 0px auto;
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 0px;
    padding: 0px;
}

.highlight-item {
    width: 200px;
    height: 200px;
    margin: 0px 10px;
    transition: 0.3s;
    background-size: cover;

    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;

    filter: grayscale(75%);
    opacity: 0.8;

    box-shadow: 0px 0px 15px 3px #35261a93;
}

.highlight-item:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.highlight-item1 {
    background-image: url("../assets/design/highlights/Drawings_1.png");
}

.highlight-item2 {
    background-image: url("../assets/design/highlights/Games_1.png");
}

.highlight-item3 {
    background-image: url("../assets/design/highlights/Stories_1.png");
}

.highlight-item-fadein {
    font-family: "Monotype Corsiva";
    font-size: 20px;
    color: #2e1808;

    background-color: #f1d7c698;
    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 6px;

    opacity: 0;
    margin: 180px 40px 0px 40px;
    transition: opacity 0.3s ease-in,
                margin 0.3s;
    overflow: hidden;
}

.highlight-item:hover .highlight-item-fadein {
    opacity: 1;
    margin: 170px 20px 0px 20px;
}

.main-separator {
    margin: 45px 0px 15px 0px;
}

.updates-title {
    padding: 15px 0px 15px 0px;
}

.updates {
    margin: 0px auto 30px auto;
}

.updates-div {
    display: grid;
    grid-template-columns: 320px 320px;
    grid-gap: 20px;
    align-items: center;
    text-align: center;
    margin: 0px 0px 10px 0px;
}

.updates-picture {
    vertical-align: middle;
    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px 3px #35261a93;
    filter: grayscale(75%);
    opacity: 0.8;
    transition: 0.3s;
}

.updates-picture:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.updates-description {
    width: 280px;
    font-family: "Monotype Corsiva";
    font-size: 24px;
    color: #2e1808;
    margin: 0px 20px;
}

.description-bkg {
    width: 320px;
    height: 240px;
    display: flex;
    align-items: center;
}
</style>
