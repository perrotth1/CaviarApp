<template>
<div class="section">
  <UserPostCard />

  <UserPostCard />

  <UserPostCard />

  <UserPostCard />
</div>
</template>

<script>
// @ is an alias to /src

import UserPostCard from '../components/UserPostCard.vue';

export default {
  name: 'Home',
  components: {
    UserPostCard
  }
}
</script>

<style>

</style>
