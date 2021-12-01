<template>
  <div class="card" v-if="user">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <figure class="image is-64x64">
            <img :src="user.profilePic" alt="Profile picture" />
          </figure>
        </div>
        <div class="column">
          <div class="media-content">
            <p class="title">{{ fullName }}</p>
            <p class="subtitle">{{ user.userHandle }}</p>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div class="card-content">

      <div class="columns">
        <div class="column is-2">
          <span class="icon">
            <i class="fas fa-users"></i>
          </span>
        </div>
        <div class="column is-3">
          <p>Followers:</p>
        </div>
        <div class="column is-">
          <p>{{ user.followers.length }}</p>
        </div>
      </div>

      <div class="columns">
        <div class="column is-2">
          <span class="icon">
            <i class="fas fa-users"></i>
          </span>
        </div>
        <div class="column is-3">
          <p>Following:</p>
        </div>
        <div class="column">
          <p>{{ user.following.length }}</p>
        </div>
      </div>

      <div class="columns">
        <div class="column is-2">
          <span class="icon">
            <i class="fas fa-tshirt"></i>
          </span>
        </div>
        <div class="column is-3">
          <p>Outfits:</p>
        </div>
        <div class="column is-">
          <p>{{totalOutfits}}</p>
        </div>
      </div>
      
      <hr />

      <!--Follow / Unfollow button -->
      <div v-if="showButton">
        <div class="card-content" v-if="isFollowed">
          <button
            class="button"
            :class="{ 'is-danger': buttonHover }"
            @mouseover="buttonHover = true"
            @mouseleave="buttonHover = false"
          >
            <div v-if="!buttonHover">
              <span class="icon is-small">
                <i class="fas fa-check"></i>
              </span>
              <span>Followed</span>
            </div>
            <div v-else>
              <span class="icon is-small">
                <i class="fas fa-times"></i>
              </span>
              <span>Unfollow</span>
            </div>
          </button>
        </div>
        <div class="card-content" v-else>
          <button class="button is-success">
            <span class="icon is-small">
              <i class="fas fa-user-friends"></i>
            </span>
            <span>Follow</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetWall } from "../services/posts.js";
import Session from "../services/session.js";

export default {
  props: {
    user: Object
  },
  data: () => ({
    buttonHover: false,
    totalOutfits: 0,
    showButton: false,
    isFollowed: false
  }),
  computed: {
    fullName() {
      return this.user.firstName + " " + this.user.lastName;
    },
  },
  methods: {
    follow() {},
    unfollow() {},
    async loadContent() {
      const wall = await GetWall(this.user.userHandle);
      this.totalOutfits = wall.length;

      this.showButton = false;
      this.isFollowed = false;
      if( Session.user ) { 
            if( Session.user.userHandle != this.user.userHandle ) {
                this.showButton = true;
                console.log("Show button: " + this.showButton)
            }
            if ( Session.user.following.map( f => f.handle ).includes( this.user.userHandle ) ) {
                this.isFollowed = true;
            }
        }
    }
  },
  async mounted(){
    this.loadContent();
  },
  watch: {
        'user' () {
            this.loadContent();
        }
    }
};
</script>

<style>
</style>