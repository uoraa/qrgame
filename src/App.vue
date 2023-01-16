<template>
  <div id="app">
    <qrGenerate msg="QR GENERATOR"/>
  </div>
</template>

<script>
import qrGenerate from './components/qr.vue'

export default {
  name: 'App',
  components: {
    qrGenerate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
