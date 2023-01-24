<template>
  <div id="app">
    <qrGenerate msg="QR TEAMS" :data="getTeams" v-if="qrDisplay" />
  </div>
</template>

<script>
import qrGenerate from "./components/qr.vue";
// import { bucket } from "./cosmic.js";
import store from "./store/store";

export default {
  name: "App",
  components: {
    qrGenerate,
  },
  data: () => ({
    isLoaded: false,
    posts: [],
    qrDisplay: false,
  }),
  methods: {
    // saved for reference
    // fetchPosts() {
    //   return bucket.getObjects({
    //     type: "Team",
    //     props: "slug,title,metadata",
    //   });
    // },
    // findSlug(slug) {
    //   return this.posts.find((item) => {
    //     return item.slug === slug;
    //   });
    // },
    // saveCosmicData() {
    //   var payload = this.findSlug("team");
    //   store.dispatch("update_data", payload.metadata).then(() => {
    //     this.qrDisplay = true;
    //   });
    // },
  },
  computed: {
    getTeams() {
      return store.state.data;
    },
  },
  created() {
    document.body.classList.add("loading");
    Promise.all([store.dispatch("intialize")]).then(() => {
      this.isLoaded = true;
      this.$nextTick(() => {
        document.body.classList.remove("loading");
        this.qrDisplay = true;
      });
    });
  },
};
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
