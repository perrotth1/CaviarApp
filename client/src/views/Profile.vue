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

    <!--<UserPostCard v-for="post in posts" :key="post._id"></UserPostCard>-->
    

</div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue';
import UserPostCard from '../components/UserPostCard.vue';
import UserPostMinimal from '../components/UserPostMinimal.vue';
import { GetWall } from '../services/posts.js';
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
        this.posts = await GetWall(Session.user.userHandle);
        console.log("!!!" + this.posts);
    }
}
</script>

<style>

</style>