<template>
    <div class="main-layout">
        <div class="logo">
            <router-link to="/"><h1 class="logo-text">Never Been</h1></router-link>
        </div>
        <div>
            <hr>
            <div class="menu-content">
                <router-link to="/drawings"><p class="menu-point">Rajzok</p></router-link>
                <router-link to="/creative"><p class="menu-point">Kreatív</p></router-link>
                <router-link to="/games"><p class="menu-point">Játékok</p></router-link>
                <router-link to="/stories"><p class="menu-point">Történetek</p></router-link>
                <router-link to="/recipes"><p class="menu-point">Receptek</p></router-link>
                <router-link to="/guestbook"><p class="menu-point">Vendégkönyv</p></router-link>
            </div>
            <hr>
        </div>
        <router-view class="content"></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
body {
    margin: auto;
    max-width: 1000px;
    min-width: 820px; /* Switch layout below this value */
    background-color: #f1d7c6;
}

body:after {
    display: none;
}

h1 {
    font-family: "Old English Text MT";
    color: #2e1808;
    font-size: 40px;
}

h2 {
    font-family: "Monotype Corsiva";
    color: #2e1808;
    font-size: 30px;
    margin: 5px 0px;
}

p {
    font-family: "Monotype Corsiva";
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
</style>

<style scoped>
.main-layout {
    display: grid;
    grid-template-rows: 100px auto auto;
    grid-gap: 0px;
    padding: 0px;
    margin: 20px;
    background-color: #f7eee4;

    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px #35261a93;
}

.logo {
    display: table;
    height: 80px;
    overflow: hidden;
    padding: 20px 0px 0px 0px;
    margin: auto;
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

.menu-point {
    font-size: 22px;
    margin: 6px;
    transition: 0.3s;
    transition-timing-function: ease;
}

.menu-point:hover {
    font-size: 24px;
    color: #d48545;
    transition: 0.3s;
    transition-timing-function: ease;
}
</style>
