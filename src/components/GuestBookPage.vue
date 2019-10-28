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
        <select class="input-gb" name="rating">
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
        </select>
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
    width: 400px;
    
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
