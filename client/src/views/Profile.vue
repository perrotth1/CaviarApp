<template>
<div class="section">
    <div class="columns">
        <div class="column is-half" v-if="user">
            <user-profile-card :user="user"/>
        </div>
        <div class="column is-half" v-if="posts">
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
import { GetByHandle } from '../services/users.js';
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
        user: null,
        showButton: false,
        isFollowed: false

    }),
    methods: {
        async loadContent() {
                //Check if user accessing own profile or anothers
                if(this.$route.query.user){
                    this.user = await GetByHandle(this.$route.query.user);
                }
                else{
                    //get user
                    this.user = Session.user;
                }

                //get user wall
                this.posts = await GetWall(this.user.userHandle);

                if(this.posts.length == 0){
                    this.posts = null;
                    this.topPost = null;
                }
                else {
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
                }   

                
            }
        },
    async mounted() {
        this.loadContent();
    },
    watch: {
        '$route.query.user' () {
            this.loadContent();
        }
    }
}
</script>

<style>

</style>