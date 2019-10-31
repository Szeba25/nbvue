<template>
    <div>
        <div class="main-layout">
            <div class="logo">
                <router-link to="/"><h1 class="logo-text">Never Been</h1></router-link>
                <div class="mobile-menu" v-on:click="toggleMobileMenu()">
                    <img v-if="!mobileMenuVisible" src="@/assets/design/open_menu.png">
                    <img v-else src="@/assets/design/close_menu.png">
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
    </div>
</template>

<script>
export default {
    name: 'App',
    
    watch:{
        $route() {
            this.mobileMenuVisible = false;
        }
    },

    data() {
        return {
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
@import url('https://fonts.googleapis.com/css?family=Srisakdi&display=swap');

html {
    overflow-y:scroll;
}

body {
    margin: auto;
    max-width: 1200px;
    background-color: #f1d7c6;
}

body:after {
    display: none;
}

h1 {
    font-family: "Caveat";
    color: #2e1808;
    font-size: 40px;
}

h2 {
    font-family: "Caveat";
    color: #2e1808;
    font-size: 30px;
    margin: 5px 0px;
}

h3 {
    font-family: "Caveat";
    color: #2e1808;
    font-size: 22px;
    margin: 5px 0px;
}

p {
    font-family: "Caveat";
    color: #2e1808;
    font-size: 16px;
    line-height: 22px;
    margin: 5px 0px;
}

hr {
    margin: 2px 20px 2px 20px;
    border-color: #2e1808;
    border-width: 0.5px;
    box-shadow: 0px 0px 5px 1px #35261a57;
}

a {
    text-decoration: none;
}

.content {
    min-height: 600px;
}

.centered {
    text-align: center;
}

/* Faded icons */
.icon-base {
    width: 200px;
    height: 200px;
    margin: 0px 10px;
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
    opacity: 0.8;
}

.faded-icon:hover {
    filter: grayscale(0%);
    opacity: 1;
}

@media only screen and (max-width: 900px) {
    .faded-icon {
        opacity: 1;
    }
}

.faded-icon-fadein {
    font-family: "Caveat";
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

@media only screen and (max-width: 900px) {
    .faded-icon-fadein {
        transition: none;
        opacity: 1;
        margin: 170px 20px 0px 20px;
    }
}

.nb-button {
    font-family: "Caveat";
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
    background-color: #d48545;
    cursor: pointer;
}

.nb-button:focus {
    outline: none;
    border: 2px solid #d48545;
    border-radius: 8px;
    box-shadow: 0 0 10px #35261a93;
}

.nb-button:disabled {
    background-color: #757575;
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

@media only screen and (max-width: 900px) {
    .main-layout {
        grid-template-rows: min-content min-content min-content min-content;
    }
}

.warning {
    margin: 60px 0px 0px 0px;
}

.logo {
    display: table;
    height: 80px;
    overflow: hidden;
    padding: 10px 0px 0px 0px;
    margin: auto;
}

.mobile-menu {
    display: none;
}

@media only screen and (max-width: 900px) {
    .logo {
        display: grid;
        grid-template-columns: auto min-content;
        overflow: hidden;
        padding: 20px 0px 0px 0px;
        margin: 0px 10px 0px 20px;
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
    height: 350px;
    transition: 0.6s;
}

.logo-text {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 52px;
}

.menu-content {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    grid-gap: 0px;
    padding: 0px;

    text-align: center;
    margin: 0px 120px;
}

.mobile-menu-content {
    display: none;
    text-align: center;
}

@media only screen and (max-width: 900px) {
    .menu-content {
        display: none;
    }

    .mobile-menu-content {
        display: grid;
    }
}

.menu-point {
    font-size: 26px;
    margin: 6px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.menu-point:hover {
    font-size: 28px;
    color: #d48545;
    transition: 0.3s;
    transition-timing-function: ease;
}

.mobile-menu-point {
    font-size: 38px;
    margin: 30px 0px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.mobile-menu-point:hover {
    font-size: 40px;
    color: #d48545;
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>
