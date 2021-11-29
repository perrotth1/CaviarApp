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

                <div class="column is-3">
                
                <!--like button-->

                <!--If user logged in-->
                <div v-if="enableLikeButton">

                  <!--If user has already liked post-->
                  <div v-if="likedByUser">
                    <button
                      class="button"
                      :class="{ 'is-danger': likeButtonHover }"
                      @mouseover="likeButtonHover = true"
                      @mouseleave="likeButtonHover = false"
                      @click="Unlike()"
                    >
                      <div v-if="!likeButtonHover">
                        <span class="icon">
                          <i class="fas fa-heart fa-lg"></i>
                        </span>
                        <span>{{likes}}</span>
                      </div>
                      <div v-else>
                        <span class="icon is-small">
                          <i class="fas fa-times"></i>
                        </span>
                        <span>{{likes}}</span>
                      </div>
                    </button>
                  </div>

                  <!--If user has not yet liked post-->
                  <div v-else>
                    <button
                      class="button"
                      :class="{ 'is-success': likeButtonHover }"
                      @mouseover="likeButtonHover = true"
                      @mouseleave="likeButtonHover = false"
                      @click="Like()"
                    >
                      <span class="icon">
                        <i class="far fa-heart fa-lg"></i>
                      </span>
                      <span>{{likes}}</span>
                      
                    </button>
                  </div>
                </div>
                <!--if user not logged in, nothing happens on click -->
                <div v-else>
                  <button
                      class="button"
                    >
                      <span class="icon">
                        <i class="far fa-heart fa-lg"></i>
                      </span>
                      <span>{{likes}}</span>
                      
                    </button>
                </div>

                </div>

                <div class="column is-3" style="margin-left: auto">
                
                <button class="button" type="button">
                  <span class="icon">
                    <i class="fas fa-share fa-lg"></i>
                  </span>
                  <span>Share</span>
                </button>

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
              <ul>
                <li>{{post.imgTopAlt}}</li>
                <li>{{post.imgPantsAlt}}</li>
                <li>{{post.imgShoesAlt}}</li>
              </ul>
            <hr /> 
            {{post.postTime}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LikePost, UnlikePost } from "../services/posts.js";

import Session from "../services/session.js";

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
    this.likes = this.post.likes;
    this.loadContent();
  },
  methods: {
    async loadContent () {
      if( Session.user ) {
        this.enableLikeButton = true;

        //Update user object in session 
        await Session.UpdateUser(); 

        if( Session.user.likedPosts.includes(this.post._id) ) {
          this.likedByUser = true;
        }
        else {
          this.likedByUser = false;
        }
      }
      else {
        this.enableLikeButton = false;
      }
    },
    async Like () {
      await LikePost( Session.user, this.post._id );
      this.likes++;
      this.loadContent();
    },
    async Unlike () {
      await UnlikePost( Session.user, this.post._id );
      this.likes--;
      this.loadContent();
    }
  },
  data: () => ({
    likedByUser: false,
    enableLikeButton: false,
    likeButtonHover: false,
    likes: null
  })
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