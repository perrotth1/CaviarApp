<template>
<div class="section">
  <div class="feedPost" v-for="p in posts" :key="p._id">
    <user-post-card :post="p" />
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
  }
}
</script>

<style>

</style>
