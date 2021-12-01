<template>
  <div class="card">
      <div class="card-content">
            <div class="columns">

                <div class="column is-4">
                    <user-profile-card :user="user" />
                </div>

                <div class="column">
                    <div v-for="p in userLatestPosts" :key="p._id">
                        <user-post-mini :user="user" :post="p" />
                    </div>
                </div>

            </div>

            <router-link :to=" { name: 'Profile', query: { user: user.userHandle } }">
                <button class="button" type="button" id="searchButton">View Profile</button>
            </router-link>
      </div>
  </div>
</template>

<script>
import UserProfileCard from "./UserProfileCard.vue";
import UserPostMini from "./UserPostMini.vue";
import { GetWall } from "../services/posts.js";

export default {
    props: {
        user: Object,
    },
    components: {
        UserProfileCard,
        UserPostMini
    },
    data: () => ({
        userLatestPosts: null
    }),
    methods: {
        async loadContent() {
            const wall = await GetWall(this.user.userHandle);
            if(wall.length > 3) {
                this.userLatestPosts = wall.slice(-3);
            }
            else {
                this.userLatestPosts = wall;
            }
        }
    },
    async mounted () {
        this.loadContent();
    }
    
}
</script>

<style>

</style>