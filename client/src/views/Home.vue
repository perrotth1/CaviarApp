<template>
<div class="section" v-if="posts">
  <div class="feedPost" v-for="p in posts" :key="p._id">
    <user-post-card :post="p" />
  </div>
</div>
<div class="section" v-else>
  <div class="card">
    <p class="card-title is-2">An empty feed for now... Start adding friends and making posts!</p>
  </div>
</div>
</template>

<script>
// @ is an alias to /src

import Session from '../services/session.js';
import UserPostCard from '../components/UserPostCard.vue';
import { GetFeed } from '../services/posts.js';


export default {
  name: 'Home',
  components: {
    UserPostCard
  },
  data: () => ({
    posts: null
  }),
  async mounted() {
    this.posts = await GetFeed(Session.user.userHandle);
    console.log(this.posts);
    if(this.posts.length == 0) {
      this.posts = null;
    }
  }
}
</script>

<style>

</style>
