<template>
  <div id="app">
    <b-button @click="saveCosmicData()">Initiate</b-button>
    <qrGenerate msg="QR TEAMS" :data="getTeams" v-if="qrDisplay" />
  </div>
</template>

<script>
import qrGenerate from "./components/qr.vue";
import { bucket } from "./cosmic.js";
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
    fetchPosts() {
      return bucket.getObjects({
        type: "Team",
        props: "slug,title,metadata",
      });
    },
    findSlug(slug) {
      return this.posts.find((item) => {
        return item.slug === slug;
      });
    },
    extractFirstObject(objects) {
      if (objects.objects == null) return void 0;
      else return objects.objects[0];
    },
    saveCosmicData() {
      var payload = this.findSlug("team");
      store.dispatch("update_data", payload.metadata).then(() => {
        this.qrDisplay = true;
      });
    },
  },
  computed: {
    getTeams() {
      return store.state.data.teamarray;
    },
  },
  created() {
    document.body.classList.add("loading");
    Promise.all([this.fetchPosts()]).then(([posts]) => {
      this.posts = posts.objects;
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
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
