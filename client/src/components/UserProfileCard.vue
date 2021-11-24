<template>
  <div class="card" v-if="user">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <figure class="image is-64x64">
            <img
              :src="user.profilePic"
              alt="Profile picture"
            />
          </figure>
        </div>
        <div class="column">
          <div class="media-content">
            <p class="title">{{fullName}}</p>
            <p class="subtitle">{{user.userHandle}}</p>
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
          <p>{{user.followers.length}}</p>
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
        <div class="column is-">
          <p>{{user.following.length}}</p>
        </div>
      </div>

      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  },
  computed: {
    fullName() {
      return(this.user.firstName + ' ' + this.user.lastName);
    }
  }

};
</script>

<style>
</style>