<template>
    <div class="main-layout">
        <div class="top-banner">
            <img src="@/assets/design/banner.jpg">
        </div>

        <div class="top-content">
            <img src="@/assets/design/topcontent.jpg">
        </div>

        <div class="left-menu">
            <router-link to="/">
                <div class="nav nav1"></div>
            </router-link>
        </div>

        <router-view></router-view>
        <router-view name="side"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
body {
    margin: auto;
    max-width: 980px;
    background-color: black;
}

body:after {
    display: none;

    /* Preloading hover images with CSS */
    content: url("assets/design/1_2.png") 
             url("assets/design/2_2.png");
}

.main-layout {
    display: grid;
    grid-template-columns: 180px 620px 180px;
    grid-gap: 0px;
    padding: 0px;
}

.top-banner {
    background-color: black;
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
}

.top-content {
    background-color: black;
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
    line-height: 0px;
    padding: 15px 0px 0px 0px;
}

.nav {
    width: 150px;
    height: 50px;
}

.nav1 {
    background-image: url("assets/design/1_1.png");
    transition: 0.3s;
}

.nav1:hover {
    background-image: url("assets/design/1_2.png");
    transition: 0.3s;
}

.nav2 {
    background-image: url("assets/design/2_1.png");
    transition: 0.3s;
}

.nav2:hover {
    background-image: url("assets/design/2_2.png");
    transition: 0.3s;
}

.left-menu {
    font-size: 18px;
    min-height: 600px;
    color: black;
    background-color: rgb(255, 221, 205);
    text-align: center;
    padding: 30px 0px 40px 5px;
    background: url("assets/design/leftdecor.png") right top no-repeat, 
                url("assets/design/footerleft.png") left bottom no-repeat, 
                url("assets/design/bkgleft.jpg") left top repeat;
}

.content {
    min-height: 600px;
    background-color: rgb(205, 228, 255);
    background: url("assets/design/footercenter.png") left bottom no-repeat, 
                url("assets/design/bkgcenter.jpg") left top repeat;
    padding: 0px 50px 40px 50px;
}

.right-menu {
    min-height: 600px;
    background-color: rgb(233, 255, 205);
    background: url("assets/design/rightdecor.png") left top no-repeat, 
                url("assets/design/footerright.png") left bottom no-repeat, 
                url("assets/design/bkgright.jpg") left top repeat;
    padding: 20px 0px 40px 0px;
    position: relative
}

.design-by {
    font-style: italic;
    margin: 0px;
    padding: 0px;
    position: absolute;
    bottom: 25px;
    right: 35px;
}

h1 {
    font-family: Vivaldi;
    color: #2e1808;
    font-size: 36px;
}

h3 {
    font-family: "Monotype Corsiva";
    font-weight: bold;
    color: #2e1808;
    font-size: 22px;
}

p {
    font-family: "Monotype Corsiva";
    color: #2e1808;
    font-size: 16px;
    line-height: 22px;
}

a {
    color: inherit;
}

.centered {
    text-align: center;
}
</style>
