<template>
    <div class="content-gb">
        <div class="new-post">
            <h2 class="centered">Új bejegyzés</h2>
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
            <textarea class="noresize input-gb" rows="8"></textarea><br>
            <input class="button-gb" type="button" value="Küldés">
        </div>
        <div class="posts">
            <h2 class="centered">Bejegyzések</h2>
            <div v-bind:class="'post' + (index%2+1) + ' post'" v-for="(item, index) in posts" v-bind:key="item.id">
                <p class="post-text"><b>Név:</b> {{item.name}}</p>
                <p class="post-text"><b>Dátum:</b> 2019.10.10, 13:45</p>
                <p class="post-text"><b>E-mail:</b> {{item.email}}</p>
                <p class="post-text"><b>Település:</b> {{item.town}}</p>
                <p class="post-text"><b>Értékelés: {{item.rating}} / 10</b></p>
                <hr class="post-hr">
                <p class="post-main-text">{{item.text}}</p>
            </div>
        </div>
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

    created() {
        this.posts.push({name: "Jóska", email:"joska@gmail.com", town:"Hahót", rating:7, text:"Jó az oldal!"});
        this.posts.push({name: "Feri", email:"feri@gmail.com", town:"Vasboldogasszony", rating:7, text:"Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg"});
        this.posts.push({name: "János", email:"janos@gmail.com", town:"Hahót", rating:7, text:"Jó az oldal!"});
        this.posts.push({name: "Bob", email:"bob@gmail.com", town:"Hahót", rating:7, text:"Jó az oldal!"});
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
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 0px;
    padding: 0px;
}

.new-post {
    margin: 20px auto auto auto;
}

.posts {
    margin: 20px 200px 20px 200px;
}

.post {
    border-style: solid;
    border-color: #2e1808;
    border-width: 0.5px;
    border-radius: 6px;

    padding: 5px 15px 5px 15px;
    margin: 20px 0px;
    width: auto;

    box-shadow: 0px 0px 10px 5px #35261a41;
}

.post1 {
    background-color: #f1d7c698;
}

.post2 {
    background-color: #d4854559;
}

.post-text {
    font-family: "Monotype Corsiva";
    font-size: 20px;
    color: #2e1808;
}

.post-main-text {
    font-family: "Monotype Corsiva";
    font-size: 18px;
    color: #2e1808;
}

.post-hr {
    margin: 10px 2px;
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

.button-gb {
    font-family: "Monotype Corsiva";
    font-size: 18px;
    color: #2e1808;
    width: 100px;
    
    padding: 8px 8px;
    margin: 10px 0px 0px 110px;
    box-sizing: border-box;
    border: 2px solid #ebccb7;
    border-radius: 8px;
    background-color: #f8f8f8;

    transition: 0.3s;
}

.button-gb:hover {
    background-color: #d48545;
    cursor: pointer;
}

.button-gb:focus {
    outline: none;
    border: 2px solid #d48545;
    border-radius: 8px;
    box-shadow: 0 0 10px #35261a93;
}

</style>
