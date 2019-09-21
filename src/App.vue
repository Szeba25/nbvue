<template>
    <div class="main-layout">
        <div class="logo">
            <h1 class="logo-text">Never Been</h1>
        </div>
        <div class="menu">
            <hr>
            <div class="menu-content">
                <p class="menu-point">Rajzok</p>
                <p class="menu-point">Kreatív</p>
                <p class="menu-point">Történetek</p>
                <p class="menu-point">Játékok</p>
                <p class="menu-point">Receptek</p>
                <p class="menu-point">Vendégkönyv</p>
            </div>
            <hr>
        </div>
        <div class="content">
            
        </div>
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
    max-width: 980px;
    /* background-color: #d3b58f; */
    background-color: #f1d7c6;
}

body:after {
    display: none;

    /* Preloading hover images with CSS */
    content: url("assets/design/highlights/draw_2.png")
             url("assets/design/highlights/nb_2.png")
             url("assets/design/highlights/st_2.png");
}

.main-layout {
    display: grid;
    grid-template-rows: 80px auto auto;
    grid-gap: 0px;
    padding: 0px;
    margin: 20px;
    background-color: #f7eee4;

    /* Some effects for the main layout */
    border-radius: 10px;
    box-shadow: 0px 0px 25px 5px #35261a93;
}

.logo {
    grid-row-start: 1;
    grid-row-end: 1;
    display: table;
    height: 80px;
    overflow: hidden;
    margin: auto;
}

.logo-text {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-size: 52px;
}

.menu {
    grid-row-start: 2;
    grid-row-end: 2;
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

.content {
    grid-row-start: 3;
    grid-row-end: 3;
    min-height: 600px;
}

h1 {
    font-family: "Old English Text MT";
    color: #2e1808;
    font-size: 40px;
}

p {
    font-family: "Monotype Corsiva";
    color: #2e1808;
    font-size: 16px;
    line-height: 22px;
}

hr {
    margin: 2px 20px 2px 20px;
    border-color: #2e1808;
    border-width: 0.5px;
    box-shadow: 0px 0px 5px 1px #35261a57;
}
</style>
