<template>
  <div class="card">
    <div class="columns">
      <div class="column is-half">
        <div class="card-content has-background-black" id="outfitArea">

        <!-- item select area -->
        <div class="columns">
            <div class="column is-half">
                <div class="card-image">
                    <figure class="image 128x128" id="topImgBlank" v-if="!imgTopSrc">
                        <img src="../../../assets/blank.png" alt="Blank">
                    </figure>
                    <figure class="image 128x128" id="topImg" v-else>
                        <img :src="imgTopSrc" :alt="imgTopAlt">
                    </figure>
                </div>
            </div>
            <div class="column is-half">
                <p class="title is-4 has-text-white">Select a top...</p>
                <button class="button" id="shirtSearchButton">Search</button>
            </div>
        </div>



          
    </div>
      </div>
      <div class="column is-half">
        <div class="card-content">
          <div class="media">
            <input class="input is-primary" type="text" placeholder="Outfit Title" v-model="title">
          </div>


          <div class="media" v-if="Session.user"> 
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  :src="Session.user.profilePic"
                  alt="Profile picture"
                />
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4" > {{fullName}} </p>
              <p class="subtitle is-6" > {{Session.user.userHandle}} </p>
            </div>
          </div>

          <div class="content">
            <textarea class="textarea" placeholder="Write some words about the style, brands, and anything else that comes to mind!" v-model="caption"></textarea>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-primary" id="shirtSearchButton" style="margin-left: 0 auto;">Post</button>
  </div>
</template>

<script>
import Session from '../services/session.js';

export default {
    data: () => ({
        Session,
        imgTopSrc: null,
        imgTopAlt: null,
        imgPantsSrc: null,
        imgPantsAlt: null,
        imgShoesSrc: null,
        imgShoesAlt: null,
        title: null,
        caption: null
    }),
    computed: {
        fullName () {
            return(this.Session.user.firstName + ' ' + this.Session.user.lastName);
        }
    }
};
</script>

<style>

.card-image {
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 15px;
}

</style>