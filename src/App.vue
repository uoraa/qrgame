<template>
  <div id="app">
    <qrGenerate msg="QR TEAMS" :data="findSlug('team')" />
  </div>
</template>

<script>
import qrGenerate from './components/qr.vue';

import { bucket } from "./cosmic.js";

export default {
  name: 'App',
  components: {
    qrGenerate
  },
  data: () => ({
    isLoaded: false,
    user: {},
    posts: [],
  }),
  methods: {
    fetchPosts() {
      return bucket.getObjects({
        type: "Team",
        props: "slug,title,metadata",
      });
    },
    fetchUser() {
      return bucket.getObjects({
        type: "Team",
        q: "user-data",
        props: "slug,title,metadata",
      });
    },
    fetchObjectTypes() {
      return bucket.getObjectTypes();
    },
    findSlug(slug) {
      return this.posts.find((item) => {
        return item.slug === slug;
      });
    },
    extractFirstObject(objects) {
      if(objects.objects == null)
        return void 0;
      else
        return objects.objects[0];
    }
  },
  created() {
    document.body.classList.add("loading");
    Promise.all([this.fetchPosts(), this.fetchUser()]).then(([posts, user_data]) => {
      user_data = this.extractFirstObject(user_data);
      this.posts = posts.objects;
      this.user = {
        name: user_data.metadata.name,
        status: user_data.metadata.status,
        email: user_data.metadata.email,
        phone: user_data.metadata.phone,
        city: user_data.metadata.city,
        lang: user_data.metadata.lang,
        photo: user_data.metadata.photo,
      }
      this.isLoaded = true;
      this.$nextTick(() => document.body.classList.remove("loading"));
    });
  },
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
