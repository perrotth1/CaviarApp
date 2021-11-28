<template>
  <div class="card" v-if="post">
    <div class="columns">
      <div class="column is-half">
        <div class="card-content has-background-black" id="outfitArea">
          <div class="card-image">
            <figure class="image" id="topImg">
              <img :src="post.imgTopSrc" :alt="post.imgTopAlt" />
            </figure>
          </div>
          <div class="card-image" id="pantImg">
            <figure class="image">
              <img :src="post.imgPantsSrc" :alt="post.imgPantsAlt" />
            </figure>
          </div>
          <div class="card-image" id="shoeImg">
            <figure class="image">
              <img :src="post.imgShoesSrc" :alt="post.imgShoesAlt" />
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="card-content">
          <div class="media">
            <p class="title is-2"> {{post.title}} </p>
          </div>

          <div class="media">
            <div class="media-content">
              <div class="columns">
                <div class="column is-2">
                  <span class="icon">
                    <i class="fas fa-heart"></i>
                  </span>
                </div>
                <div class="column is-2">
                  <p class="title is-6"> {{post.likes}} </p>
                </div>
                <div class="column is-3" style="margin-left: auto">
                  <span class="icon">
                    <i class="fas fa-share"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

        
          <div class="media">

            <div class="media-left">

              <router-link :to=" { name: 'Profile', query: { user: post.userHandle } }">
              <figure class="image is-48x48">
                <img
                  :src="post.profilePic"
                  alt="Profile picture"
                />
              </figure>
              </router-link>
            </div>

            <div class="media-content">
              <router-link :to=" { name: 'Profile', query: { user: post.userHandle } }">
                <p class="title is-4" > {{fullName}} </p>
                <p class="subtitle is-6" > {{post.userHandle}} </p>
              </router-link>
            </div>
          </div>

          <div class="content">
            {{post.caption}}
            <hr />
            {{post.postTime}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  },
  computed: {
    fullName() {
      return(this.post.firstName + ' ' + this.post.lastName);
    }
  },
  async mounted() {
    console.log("Mounting user post card!");
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