<template>
    <div class="card">
        <div class="card-content">
            <div class="columns">
                <div class="column">
                    <figure class="image is-48x48">
                        <img :src="user.profilePic" alt="Profile picture" />
                    </figure>
                </div>
                <div class="column">
                    <p class="title is-4">{{post.title}}</p>
                </div>
                <div class="column">
                    <figure class="image is-64x64">
                        <img :src="post.imgTopSrc" :alt="post.imgTopAlt" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="image is-64x64">
                        <img :src="post.imgPantsSrc" :alt="post.imgPantsAlt" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="image is-64x64">
                        <img :src="post.imgShoesSrc" :alt="post.imgShoesAlt" />
                    </figure>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    props: {
        user: Object,
        post: Object
    }
}
</script>

<style>

</style>