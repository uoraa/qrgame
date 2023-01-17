<template>
  <div>
    <h1>{{ msg }}</h1>
    <span v-for="team in qrGenerator.teams" :key="team.id" class="qrs">
      {{ team.name }}
      <br />
      <vue-qr
        :text="team.value"
        :qid="team.id"
        :size="qrGenerator.size"
        :margin="qrGenerator.margin"
        :colorLight="qrGenerator.colorLight"
        :colorDark="team.colorDark"
      ></vue-qr>
      <br />
    </span>
  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  components: { VueQr },
  name: "qrGenerate",
  props: {
    msg: String,
  },
  data() {
    return {
      qrGenerator: {
        teams: [
          {
            id: 0,
            name: "red",
            value: "1 Point!",
            colorDark: "#ff0000",
          },
          {
            id: 1,
            name: "Blue",
            value: "1 point!",
            colorDark: "#0084ff",
          },
        ],
        size: 500,
        margin: 30,
        colorLight: "#ffffff",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qrs {
  text-align: center;
}
</style>
