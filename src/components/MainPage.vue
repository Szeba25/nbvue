<template>
    <div class="mainpage-content">
        <div class="highlights-title centered">
            <h2>Kiemelt tartalmak</h2>
        </div>
        <div class="highlights">
            <router-link to="/drawings">
                <div class="icon-base faded-icon highlight-item1"><div class="faded-icon-fadein centered">Rajzok</div></div>
            </router-link>
            <router-link to="/games">
                <div class="icon-base faded-icon highlight-item2"><div class="faded-icon-fadein centered">Játékok</div></div>
            </router-link>
            <router-link to="/stories">
                <div class="icon-base faded-icon highlight-item3"><div class="faded-icon-fadein centered">Történetek</div></div>
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
                        <img class="updates-picture" v-bind:src="'/main_page/' + item.picture" width=320px height=240px>
                    </router-link>
                    <div class="description-bkg"><div class="updates-description">{{item.description}}</div></div>
                </div>
                <div v-else class="updates-div">
                    <div class="description-bkg"><div class="updates-description">{{item.description}}</div></div>
                   <router-link v-bind:to=item.link>
                        <img class="updates-picture" v-bind:src="'/main_page/' + item.picture" width=320px height=240px>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="updates-mobile">
            <div v-for="item in updates" v-bind:key="item.id">
                <div class="updates-div-mobile">
                    <router-link v-bind:to=item.link>
                        <img class="updates-picture" v-bind:src="'/main_page/' + item.picture" width=320px height=240px>
                    </router-link>
                    <div class="description-bkg-mobile"><div class="updates-description-mobile">{{item.description}}</div></div>
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
        Axios.get('/main_page/updates.json?_=' + new Date().getTime()).then((response) => {
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
    grid-template-rows: min-content min-content min-content min-content auto;
    grid-gap: 0px;
    padding: 0px;
}

.highlights-title {
    padding: 30px 0px 30px 0px;
}

.highlights {
    margin: 0px auto;
    display: grid;
    grid-template-columns: 220px 220px 220px;
    grid-gap: 20px;
    padding: 0px;
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

.main-separator {
    margin: 45px 0px 15px 0px;
}

.updates-title {
    padding: 15px 0px 30px 0px;
}

.updates {
    margin: 0px auto 30px auto;
    display: block;
}

.updates-mobile {
    margin: 0px auto 30px auto;
    display: none;
}

.updates-div {
    display: grid;
    grid-template-columns: 322px 322px;
    grid-gap: 20px;
    align-items: center;
    text-align: center;
    margin: 0px 0px 10px 0px;
}

.updates-div-mobile {
    display: grid;
    grid-template-columns: 322px;
    grid-gap: 25px;
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

@media only screen and (max-width: 800px) {
    .updates-picture {
        filter: grayscale(0%);
        opacity: 1;
    }
}

@media only screen and (max-width: 400px) {
    .updates-picture {
        width: 240px;
        height: 180px;
    }
}

.updates-picture:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.updates-description {
    width: 280px;
    font-family: "Courgette";
    font-size: 24px;
    color: #2e1808;
    margin: 0px 20px;
}

.updates-description-mobile {
    width: 280px;
    font-family: "Courgette";
    font-size: 24px;
    color: #2e1808;
    margin: 0px 20px 30px 20px;
}

.description-bkg {
    width: 320px;
    height: 240px;
    display: flex;
    align-items: center;
}

.description-bkg-mobile {
    width: 320px;
    align-items: center;
}

@media only screen and (max-width: 800px) {
    .highlights {
        grid-template-columns: 220px;
        grid-gap: 20px;
    }

    .updates {
        display: none;
    }

    .updates-mobile {
        display: block;
    }
}
</style>
