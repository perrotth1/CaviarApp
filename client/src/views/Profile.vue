<template>
<div class="section">
    <div class="columns">
        <div class="column is-half">
            <UserProfileCard/>
        </div>
        <div class="column is-half">
            <UserPostMinimal/>
        </div>
    </div>

    <div class="UserPostCard" v-for="p in posts" :key="p.src">
        <UserPostCard />
    </div>

</div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue';
import UserPostCard from '../components/UserPostCard.vue';
import UserPostMinimal from '../components/UserPostMinimal.vue';
import { GetFeed } from '../services/posts.js';
import Session from '../services/session.js';

export default {
    Name: 'Profile',
    components: { 
        UserProfileCard,
        UserPostMinimal,
        UserPostCard
    },
    data: () => ({
        posts: []
    }),
    async mounted() {
        console.log(Session.user);
        this.posts = await GetFeed(Session.user.userHandle);
        console.log(this.posts);
    }

}
</script>

<style>

</style>