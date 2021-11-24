<template>
  <div class="card" v-if="post">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <span class="icon">
            <i class="fas fa-crown fa-2x"></i>
          </span>
        </div>
        <div class="column">
          <p class="title is-3">{{post.title}}</p>
        </div>
      </div>
    </div>
    <div class="card-content has-background-black">
      <div class="card-image">
        <figure class="image" id="topImg">
          <img :src="post.imgTopSrc" :alt="post.imgTopAlt" />
        </figure>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src="post.imgPantsSrc" :alt="post.imgPantsAlt" />
        </figure>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src="post.imgShoesSrc" :alt="post.imgShoesAlt" />
        </figure>
      </div>
    </div>

    <div class="card-content">
      <div class="columns">
        <div class="column is-2">
          <span class="icon">
            <i class="fas fa-heart"></i>
          </span>
        </div>
        <div class="column is-2">
          <p class="title is-6">{{post.likes}}</p>
        </div>
      </div>
      <hr>
      <p class="card-subtitle">{{post.postTime}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>

<style>
.card {
  margin-bottom: 20px;
  padding: 15px;
}

.card-image {
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>