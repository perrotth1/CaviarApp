<template>
<div class="section">
    <div class="columns">
        <div class="column is-half">
            <user-profile-card :user="user"/>
        </div>
        <div class="column is-half">
            <user-post-minimal :post="topPost" />
        </div>
    </div>


    <div class="post" v-for="p in posts" :key="p._id">
        <post :post="p" />
    </div>

</div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue';
import post from '../components/UserPostCard.vue';
import UserPostMinimal from '../components/UserPostMinimal.vue';
import { GetWall } from '../services/posts.js';
import Session from '../services/session.js';

export default {
    Name: 'Profile',
    components: { 
        UserProfileCard,
        UserPostMinimal,
        post
    },
    data: () => ({
        posts: null,
        topPost: null,
        user: null
    }),
    async mounted() {
        //get user wall
        this.posts = await GetWall(Session.user.userHandle);

        //get user
        this.user = Session.user; 

        //find top post
        let topIndex = 0
        let topLikes = 0
        for(const p of this.posts) {
            if(p.likes > topLikes) {
                topIndex = this.posts.indexOf(p);
                topLikes = p.likes;
            }
        }
        this.topPost = this.posts[topIndex];

        console.log("[!] Mounted Profile");
    }
}
</script>

<style>

</style>