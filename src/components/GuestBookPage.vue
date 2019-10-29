<template>
    <div class="content-gb">
        <h2>Új bejegyzés</h2>
        <p class="line-gb">Név:</p>
        <input class="input-gb" type="text">
        <p class="line-gb">E-mail:</p>
        <input class="input-gb" type="text">
        <p class="line-gb">Település:</p>
        <input class="input-gb" type="text">
        <p class="line-gb">Értékelés:</p>
        <img src="@/assets/design/rating/star_on.png" v-for="n in newPost.rating" v-bind:key="n+'A'" v-on:click="setRating(n)">
        <img src="@/assets/design/rating/star_off.png" v-for="k in 10-newPost.rating" v-bind:key="k+'B'" v-on:click="setRating(k+(newPost.rating))">
        <p class="line-gb">Üzenet:</p>
        <textarea class="noresize input-gb" rows="8"></textarea>
    </div>
</template>

<script>
export default {
    name: 'GuestBookPage',

    data() {
        return {
            posts: [],
            newPost: {
                name: "",
                email: "",
                town: "",
                rating: 10,
                text: ""
            }
        }
    },

    methods: {
        setRating(rating) {
            this.newPost.rating = rating;
        }
    }
}
</script>

<style scoped>

.noresize {
    resize: none;
}

.content-gb {
    margin: 0px 10px;
}

.line-gb {
    font-family: "Monotype Corsiva";
    color: #2e1808;
    font-size: 20px;
    margin: 5px 0px 5px 12px;
}

.input-gb {
    font-family: Arial;
    width: 320px;
    
    padding: 8px 8px;
    box-sizing: border-box;
    border: 2px solid #ebccb7;
    border-radius: 4px;
    background-color: #f8f8f8;

}

.input-gb:focus {
    outline: none;
    border: 2px solid #d48545;
    border-radius: 4px;
    box-shadow: 0 0 10px #35261a93;
}

</style>
