<template>
    <div class="right-menu">
        <p class="centered bold biggerText">Ajánlott<br> felbontás</p>
        <p class="centered">1024*768,<br> vagy nagyobb</p>
        <div class="highlight highlight1 spaced"></div>
        <div class="highlight highlight2 spaced"></div>
        <div class="highlight highlight3 spaced"></div>
        <p class="design-by">Design by: Zsuzsy</p>
    </div>
</template>

<script>
export default {
    name: 'MainPageSide'
}
</script>

<style scoped>

.spaced {
    margin: 10px 20px 0px 0px;
}

.biggerText {
    font-size: 18px;
}

.highlight {
    width: 140px;
    height: 140px;
}

.highlight1 {
    background-image: url("../assets/design/highlights/draw_1.jpg");
    transition: 0.3s;
}

.highlight1:hover {
    background-image: url("../assets/design/highlights/draw_2.jpg");
    transition: 0.3s;
}

.highlight2 {
    background-image: url("../assets/design/highlights/nb_1.jpg");
    transition: 0.3s;
}

.highlight2:hover {
    background-image: url("../assets/design/highlights/nb_2.jpg");
    transition: 0.3s;
}

.highlight3 {
    background-image: url("../assets/design/highlights/str_1.jpg");
    transition: 0.3s;
}

.highlight3:hover {
    background-image: url("../assets/design/highlights/str_2.jpg");
    transition: 0.3s;
}

</style>
