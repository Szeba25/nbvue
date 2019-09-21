<template>
    <div class="main-layout">
        <div class="logo">
            <h1 class="logo-text">Never Been</h1>
        </div>
        <div>
            <hr>
            <div class="menu-content">
                <p class="menu-point">Rajzok</p>
                <p class="menu-point">Kreatív</p>
                <p class="menu-point">Játékok</p>
                <p class="menu-point">Történetek</p>
                <p class="menu-point">Receptek</p>
                <p class="menu-point">Vendégkönyv</p>
            </div>
            <hr>
        </div>
        <div class="content">
            <div class="highlights-title centered">
                <h2>Kiemelt tartalmak</h2>
            </div>
            <div class="highlights">
                <div class="highlight-item highlight-item1"><div class="highlight-item-fadein centered">Rajzok</div></div>
                <div class="highlight-item highlight-item2"><div class="highlight-item-fadein centered">Játékok</div></div>
                <div class="highlight-item highlight-item3"><div class="highlight-item-fadein centered">Történetek</div></div>
            </div>
            <div class="updates-title centered">
                <h2>Friss tartalmak</h2>
            </div>
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
    max-width: 1000px;
    min-width: 820px; /* Switch layout below this value */
    background-color: #f1d7c6;
}

body:after {
    display: none;

    /* Preloading hover images with CSS */
    content: url("assets/design/highlights/Drawings_2.png")
             url("assets/design/highlights/Games_2.png")
             url("assets/design/highlights/Stories_2.png");
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

.centered {
    text-align: center;
}
</style>

<style scoped>
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

.menu-content {
    /* Display menu elements in 6 columns */
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
    min-height: 600px;

    /* Define a two-row grid for content */
    display: grid;
    grid-template-rows: min-content 200px min-content auto;
    grid-gap: 0px;
    padding: 0px;
}

.highlights-title {
    padding: 15px 0px 15px 0px;
}

.highlights {
    margin: 0px auto;

    /* Define a three-column grid for content */
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
}

.highlight-item1 {
    background-image: url("assets/design/highlights/Drawings_1.png");
}

.highlight-item1:hover {
    background-image: url("assets/design/highlights/Drawings_2.png");
}

.test-appear-parent {
    height: 220px;
}

.test-appear {
    opacity: 0;
    transition: opacity 0.3s ease-in,
                height 0.3s;
    height: 0px;
    overflow: hidden;
}

.test-appear-parent:hover .test-appear {
    opacity: 1;
    height: 20px;
}

.highlight-item2 {
    background-image: url("assets/design/highlights/Games_1.png");
}

.highlight-item2:hover {
    background-image: url("assets/design/highlights/Games_2.png");
}

.highlight-item3 {
    background-image: url("assets/design/highlights/Stories_1.png");
}

.highlight-item3:hover {
    background-image: url("assets/design/highlights/Stories_2.png");
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

.updates-title {
    padding: 15px 0px 0px 0px;
}
</style>
