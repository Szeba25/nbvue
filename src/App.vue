<template>
    <div>
        <div class="main-layout">
            <div class="title">
                <router-link to="/"><img class="title-image" v-bind:src="'/titles/title' + titleId + '.png'"></router-link>
                <div v-bind:class="[{'mobile-menu-change': mobileMenuVisible}, 'mobile-menu']" v-on:click="toggleMobileMenu()">
                    <div class="mobile-menu-bar1"></div>
                    <div class="mobile-menu-bar2"></div>
                    <div class="mobile-menu-bar3"></div>
                </div>
            </div>
            <div>
                <hr class="menu-hr">
                <div class="menu-content">
                    <router-link to="/drawings"><p class="menu-point">Rajzok</p></router-link>
                    <router-link to="/creative"><p class="menu-point">Kreatív</p></router-link>
                    <router-link to="/games"><p class="menu-point">Játékok</p></router-link>
                    <router-link to="/stories"><p class="menu-point">Történetek</p></router-link>
                    <router-link to="/recipes"><p class="menu-point">Receptek</p></router-link>
                    <router-link to="/guestbook"><p class="menu-point">Vendégkönyv</p></router-link>
                </div>
                <div v-bind:class="'mobile-menu-content mobile-menu-visible-' + mobileMenuVisible">
                    <div>
                        <router-link to="/drawings"><p class="mobile-menu-point">Rajzok</p></router-link>
                        <router-link to="/creative"><p class="mobile-menu-point">Kreatív</p></router-link>
                        <router-link to="/games"><p class="mobile-menu-point">Játékok</p></router-link>
                        <router-link to="/stories"><p class="mobile-menu-point">Történetek</p></router-link>
                        <router-link to="/recipes"><p class="mobile-menu-point">Receptek</p></router-link>
                        <router-link to="/guestbook"><p class="mobile-menu-point">Vendégkönyv</p></router-link>
                    </div>
                </div>
                <hr class="menu-hr">
            </div>
            <router-view class="content"></router-view>
        </div>
        <footer>
            <cookie-law 
                buttonText = "Rendben!" 
                message="A weboldalon cookie-kat használunk az optimális működés érdekében. 🍪" 
                theme="mytheme"
            ></cookie-law>
        </footer>
    </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law';

export default {
    components: { CookieLaw },

    name: 'App',
    
    watch:{
        $route() {
            this.mobileMenuVisible = false;
        }
    },

    created() {
        this.titleId = Math.floor(Math.random() * 3) + 1;
    },

    data() {
        return {
            titleId: 1,
            mobileMenuVisible: false
        }
    },

    methods: {
        toggleMobileMenu() {
            this.mobileMenuVisible = !this.mobileMenuVisible;
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Courgette&display=swap');

.Cookie--mytheme {
    font-family: "Courgette";
    background-color: rgb(231, 203, 175);
    border-radius: 10px;
    border: 1px solid #2e1808;
    font-size: 18px;
    padding: 10px;
    color: #2e1808;
}

.Cookie--mytheme > div > .Cookie__button {
    font-family: "Courgette";
    font-size: 18px;
    color: #2e1808;
    width: 100px;
    
    padding: 8px 8px;
    box-sizing: border-box;
    border: 2px solid #ebccb7;
    border-radius: 8px;
    background-color: #f8f8f8;

    transition: 0.3s;
}

.Cookie--mytheme > div > .Cookie__button:hover {
    cursor: pointer;
    border: 2px solid #d48545;
}

html {
    overflow-y: scroll;
}

body {
    margin: auto;
    max-width: 1200px;
    background-image: url("assets/design/bkg.png");
    background-repeat: repeat;
}

body:after {
    display: none;
}

h1 {
    font-family: "Courgette";
    color: #2e1808;
    font-size: 40px;
}

h2 {
    font-family: "Courgette";
    color: #2e1808;
    font-size: 30px;
    margin: 5px 0px;
}

h3 {
    font-family: "Courgette";
    color: #2e1808;
    font-size: 22px;
    margin: 5px 0px;
}

p {
    font-family: "Courgette";
    color: #2e1808;
    font-size: 16px;
    line-height: 22px;
    margin: 5px 0px;
}

a {
    color: #d48545;
    text-decoration: none;
}

a:visited {
    color: #d48545;
    text-decoration: none;
}

.content {
    min-height: 600px;
}

.centered {
    text-align: center;
}

.menu-hr {
    margin: 2px 10px 2px 10px;
    border-color: #2e1808;
    border-width: 0.5px;
    box-shadow: 0px 0px 5px 1px #35261a57;
}

/* Faded icons */
.icon-base {
    width: 200px;
    height: 200px;
    margin: 0px 9px;
    cursor: pointer;
    
    background-size: cover;

    border-style: solid;
    border-color: #2e1808;
    border-width: 1px;
    border-radius: 15px;

    box-shadow: 0px 0px 15px 3px #35261a93;
}

.faded-icon {
    transition: 0.3s;
    filter: grayscale(75%);
}

.faded-icon:hover {
    filter: grayscale(0%);
}

@media only screen and (max-width: 800px) {
    .faded-icon {
        filter: grayscale(0%);
        opacity: 1;
    }
}

.faded-icon-label {
    font-family: "Courgette";
    font-size: 20px;
    color: #2e1808;

    background-color: #f1d7c698;
    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 6px;

    opacity: 1;
    margin: 170px 20px 0px 20px;
    transition: none;
    overflow: hidden;
}

.faded-icon-fadein {
    font-family: "Courgette";
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

.faded-icon:hover .faded-icon-fadein {
    opacity: 1;
    margin: 170px 20px 0px 20px;
}

@media only screen and (max-width: 800px) {
    .faded-icon-fadein {
        transition: none;
        opacity: 1;
        margin: 170px 20px 0px 20px;
    }
}

.nb-button {
    font-family: "Courgette";
    font-size: 18px;
    color: #2e1808;
    width: 100px;
    
    padding: 8px 8px;
    box-sizing: border-box;
    border: 2px solid #ebccb7;
    border-radius: 8px;
    background-color: #f8f8f8;

    transition: 0.3s;
}

.button-centered {
    margin: 0px auto;
    display: block;
}

.nb-button:hover {
    cursor: pointer;
    border: 2px solid #d48545;
}

.nb-button:focus {
    outline: none;
    border-radius: 8px;
    box-shadow: 0 0 8px #35261a93;
}

.nb-button:disabled {
    color: #303030;
    background-color: #c4c4c4;
    border: 2px solid #929292;
    box-shadow: 0 0 8px #35261a93;
}

.main-back {
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    margin: 25px auto 25px auto;
    transition: 0.3s;
    transition-timing-function: ease-out;

    padding: 8px;
    border: 1px solid #2e1808; /* #ebccb7; */
    border-radius: 8px;

    box-shadow: 0px 0px 4px #35261a93;
}

.main-back:hover {
    color: #d48545;
    transform: translateY(2px);
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>

<style scoped>
.main-layout {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
    margin: 20px;
    background-color: #f7eee4;

    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px #35261a93;
}

@media only screen and (max-width: 800px) {
    .main-layout {
        grid-template-rows: min-content min-content min-content min-content;
        margin: 0px;
        border-radius: 0px;
        box-shadow: none;
    }
}

.warning {
    margin: 60px 0px 0px 0px;
}

.title {
    display: table;
    overflow: hidden;
    padding: 10px 0px 0px 0px;
    margin: 0px auto 10px auto;
}

.title-image {
    width: 600px;
    height: 150px;
}

@media only screen and (max-width: 1000px) {
    .title-image {
        width: 500px;
        height: 125px;
    }
}

@media only screen and (max-width: 800px) {
    .title-image {
        width: 400px;
        height: 100px;
    }
}

@media only screen and (max-width: 550px) {
    .title-image {
        width: 300px;
        height: 75px;
    }
}

@media only screen and (max-width: 420px) {
    .title-image {
        width: 240px;
        height: 60px;
    }
}

.mobile-menu {
    width: 32px;
    height: 32px;
    display: none;
    cursor: pointer;
}

.mobile-menu-bar1, .mobile-menu-bar2, .mobile-menu-bar3 {
    width: 32px;
    height: 5px;
    background-color: #2e1808;
    margin: 6px 0px;
    transition: 0.4s;
}

.mobile-menu-change .mobile-menu-bar1 {
    transform: translate(0px, 11px) rotate(-45deg);
}

.mobile-menu-change .mobile-menu-bar2 {
    opacity: 0;
}

.mobile-menu-change .mobile-menu-bar3 {
    transform: translate(0px, -11px) rotate(45deg);
}

@media only screen and (max-width: 800px) {
    .title {
        display: grid;
        grid-template-columns: auto min-content;
        overflow: hidden;
        padding: 20px 0px 0px 0px;
        margin: 0px 10px 10px 20px;
    }

    .mobile-menu {
        display: block;
    }
}

.mobile-menu-visible-false {
    opacity: 0;
    height: 0px;
    transition: 0.3s;
    overflow: hidden;
}

.mobile-menu-visible-true {
    opacity: 1s;
    height: 230px;
    transition: 0.6s;
}

.menu-content {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 0px;
    padding: 0px;

    text-align: center;
    margin: 0px 150px;
}

@media only screen and (max-width: 1000px) {
    .menu-content {
        margin: 0px 50px;
    }
}

.mobile-menu-content {
    display: none;
    text-align: center;
}

@media only screen and (max-width: 800px) {
    .menu-content {
        display: none;
    }

    .mobile-menu-content {
        display: grid;
    }
}

.menu-point {
    font-size: 24px;
    margin: 5px 6px 8px 6px;
    transition: 0.3s;
    transition-timing-function: ease-out;
}

.menu-point:hover {
    color: #d48545;
    transform: translateY(2px);
    transition: 0.3s;
    transition-timing-function: ease;
}

.mobile-menu-point {
    font-size: 26px;
    margin: 14px 0px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.mobile-menu-point:hover {
    color: #d48545;
    transform: translateX(4px);
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>
