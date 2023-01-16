<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <qrcode-vue :value="value" :size="size" level="L" type="svg" :margin="margin" :background="background" :foreground="foreground" />
    </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
    data() {
        return {
            value: 'https://example.com',
            size: 1000,
            margin: 30,
            background: "#ff0000",
            foreground: "#ffffff",
        }
    },
    components: {
        QrcodeVue,
    },
    name: 'qrGenerate',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
