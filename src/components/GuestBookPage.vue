<template>
    <div class="content-gb">
        <div class="new-post">
            <h2 class="new-post-title centered">Új bejegyzés</h2>
            <p class="line-gb">Név <span class="error-message">* {{errors.nameError}}</span></p>
            <input class="input-gb" type="text" v-model="newPost.name">
            <p class="line-gb">E-mail</p>
            <input class="input-gb" type="text" v-model="newPost.email">
            <p class="line-gb">Értékelés <span class="error-message">* {{errors.ratingError}}</span></p>
            <img class="rating-star" src="@/assets/design/rating/star_on.png" v-for="n in newPost.rating" v-bind:key="n+'A'" v-on:click="setRating(n)">
            <img class="rating-star" src="@/assets/design/rating/star_off.png" v-for="k in 10-newPost.rating" v-bind:key="k+'B'" v-on:click="setRating(k+(newPost.rating))">
            <p class="line-gb">Üzenet</p>
            <textarea class="noresize input-gb" rows="8" v-model="newPost.message"></textarea><br>
            
            <input class="input-space nb-button button-centered" type="button" value="Küldés" v-on:click="post()" v-bind:disabled="loading">
            <vue-recaptcha class="recaptcha-gb" 
                ref="invisibleRecaptcha"
                v-on:verify="onVerify" 
                v-on:expired="onExpired" 
                size="invisible"
                sitekey="6LcwgcAUAAAAAOCyIhcbEKzEgAJSsWV4Ac2MsadN">
            </vue-recaptcha>
            
        </div>
        <div class="posts">
            <h2 class="posts-title centered">Bejegyzések</h2>
            <div v-bind:class="'post' + (index%2+1) + ' post'" v-for="(item, index) in posts" v-bind:key="item.id">
                <p class="post-text"><b>#:</b> {{item.id}}.</p>
                <p class="post-text"><b>Név:</b> {{item.name}}</p>
                <p class="post-text"><b>Dátum:</b> {{item.date}}</p>
                <p class="post-text"><b>E-mail:</b> {{item.email}}</p>
                <p class="post-text"><b>Értékelés: {{item.rating}} / 10</b></p>
                <hr class="post-hr">
                <p class="post-main-text">{{item.message}}</p>
            </div>
            <input class="nb-button button-centered" v-bind:disabled="loading || noMoreMessages" type="button" v-bind:value="moreMessage" v-on:click="loadMorePosts()">
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';

export default {
    name: 'GuestBookPage',

    data() {
        return {
            top: 10,
            loading: true,
            moreMessage: "Több",
            noMoreMessages: false,
            posts: [],
            newPost: {
                name: "",
                email: "",
                rating: 0,
                message: "",
                recaptchaToken: ""
            },
            errors: {
                nameError: "",
                ratingError: ""
            }
        }
    },

    created() {
        this.loadMorePosts();
    },

    watch: {
        'newPost.name'(value) {
            if (value.length > 0) {
                this.errors.nameError = "";
            }
        },

        'newPost.rating'(value) {
            if (value > 0) {
                this.errors.ratingError = "";
            }
        }
    },

    methods: {
        setRating(rating) {
            this.newPost.rating = rating;
        },

        loadNewPosts() {
            this.loading = true;

            let first = -1;
            if (this.posts.length > 0) {
                first = parseInt(this.posts[0].id);
            }

            Axios.get("php/select_new.php?first=" + first).then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    response.data[i].rating = parseInt(response.data[i].rating);
                    this.posts.unshift(response.data[i]);
                }
                this.loading = false;
            });
        },

        loadMorePosts() {
            this.loading = true;

            let last = -1;
            if (this.posts.length > 0) {
                last = parseInt(this.posts[this.posts.length-1].id);
            }

            Axios.get("php/select_old.php?last=" + last + "&top=" + this.top)
                .then((response) => {
                    let arr = response.data["results"];
                    if (arr.length > 0) {
                        for (let i = 0; i < arr.length; i++) {
                            arr.rating = parseInt(arr[i].rating);
                            this.posts.push(arr[i]);
                        }
                    }
                    if (response.data["end_of_results"]) {
                        this.moreMessage = "Vége...";
                        this.noMoreMessages = true;
                    }
                    this.loading = false;
                })
                .catch((error) => {
                    window.console.log(error);
                    this.loading = true;
                });
        },

        toFormData(obj) {
			let form_data = new FormData();
			for (let key in obj) {
				form_data.append(key, obj[key]);
			}
			return form_data;
        },

        onVerify(recaptchaToken) {
            this.$refs.invisibleRecaptcha.reset();
            this.newPost.recaptchaToken = recaptchaToken;
            Axios.post("php/insert.php", this.toFormData(this.newPost)).then((response) => {
                if (response.data != "SUCCESS") {
                    window.console.log(response.data);
                } else {
                    this.newPost.name = "";
                    this.newPost.email = "";
                    this.newPost.rating = 0;
                    this.newPost.message = "";
                    this.newPost.recaptchaToken = "";
                    this.loadNewPosts();
                }
                this.loading = false;
            });
        },

        onExpired() {
            this.$refs.invisibleRecaptcha.reset();
        },

        post() {
            let anyError = false;
            if (this.newPost.name.length === 0) {
                this.errors.nameError = "Név kötelező!";
                anyError = true;
            }
            if (this.newPost.rating === 0) {
                this.errors.ratingError = "Értékelés kötelező!";
                anyError = true;
            }
            if (!anyError) {
                this.$refs.invisibleRecaptcha.execute();
                this.loading = true;
            }
        }
    },

    components: { VueRecaptcha }
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
    margin: 10px 180px 10px 180px;
}

.new-post-title {
    padding: 15px 0px 5px 0px;
}

@media only screen and (max-width: 800px) {
    .new-post {
        margin: 10px;
    }
}

.posts {
    margin: 10px 160px 30px 160px;
}

@media only screen and (max-width: 800px) {
    .posts {
        margin: 10px 10px 20px 10px;
    }
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
    font-family: "Courgette";
    font-size: 20px;
    color: #2e1808;
}

.posts-title {
    margin: 0px 0px 20px 0px;
}

.post-main-text {
    white-space: pre-wrap;
    font-family: "Courgette";
    font-size: 18px;
    color: #2e1808;
}

.post-hr {
    margin: 10px 2px;
}

.recaptcha-gb {
    display: inline-block;
    width: 304px;
    margin: 20px 0px 0px 0px;
}

.line-gb {
    font-family: "Courgette";
    color: #2e1808;
    font-size: 20px;
    margin: 5px 0px 5px 12px;
}

.input-gb {
    font-family: "Arial";
    width: 100%;
    padding: 8px 8px;
    box-sizing: border-box;
    border: 2px solid #ebccb7;
    border-radius: 4px;
    background-color: #f8f8f8;
}

.input-space {
    margin-top: 10px;
}

.input-gb:focus {
    outline: none;
    border: 2px solid #d48545;
    border-radius: 4px;
    box-shadow: 0 0 10px #35261a93;
}

.error-message {
    color: #d61616;
}

.rating-star {
    cursor: pointer;
}

@media only screen and (max-width: 400px) {
    .rating-star {
        width: 24px;
        height: 24px;
    }
}
</style>
