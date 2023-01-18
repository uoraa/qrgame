<template>
  <div>
    <h1>{{ msg }}</h1>
    <span v-for="team in data.metadata.teamarray" :key="team.id" class="qrs">
      {{ team.name }}
      <br />
      <vue-qr
        :text="team.value"
        :qid="team.name"
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
    data: Object,
  },
  data() {
    return {
      qrGenerator: {
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
