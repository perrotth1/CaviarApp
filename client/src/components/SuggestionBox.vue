<template>
<div class="container">

    <div class="box" v-for="s in suggestions" :key="s._id">

        <router-link :to=" { name: 'Profile', query: { user: s.userHandle } }">

            <div class="card-content">
                <div class="columns">
                    <div class="column is-3">
                        <figure class="image is-64x64" id="topImg">
                            <img :src="s.profilePic" alt="Profile Pic" />
                        </figure>
                    </div>
                    <div class="column">
                        <p class="card-title is-1">{{s.userHandle}}</p>
                    </div>
                </div>
            </div>

        </router-link>
    </div>

</div>
</template>

<script>
export default {
    props: {
        suggestions: Array
    }
    
}
</script>

<style>

</style>