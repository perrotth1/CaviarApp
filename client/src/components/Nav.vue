<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/CAVIARlogo.png" height="50" />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-menu is-tab" to="/" active-class="is-active">
          <figure class="image">
            <img src="../assets/placeholders/user1avatar.png" height="50" />
          </figure>
        </router-link>

        <router-link class="navbar-menu is-tab" to="/" active-class="is-active" exact>
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
        </router-link>

        <router-link class="navbar-menu is-tab" to="/" active-class="is-active">
          <span class="icon">
            <i class="fas fa-search"></i>
          </span>
        </router-link>

        <router-link class="navbar-menu is-tab" to="/post" active-class="is-active">
          <span class="icon">
            <i class="fas fa-comment-alt"></i>
          </span>
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-menu is-tab" to="/" active-class="is-active">
              About
            </router-link>
            <router-link class="navbar-menu is-tab" to="/" active-class="is-active">
              Contact
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <LoginBadge />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
$primary: red;
$body-background-color: red;
$background: red;
</style>

<script>
import LoginBadge from './LoginBadge';

export default {
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    LoginBadge
  }
};
</script>


