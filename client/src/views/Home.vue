<template>
<div class="section">
  <UserPostNew />

  <UserPostNew />

  <UserPostNew />

  <UserPostNew />
</div>
</template>

<script>
// @ is an alias to /src

import UserPostNew from '../components/UserPostNew.vue';

export default {
  name: 'Home',
  components: {
    UserPostNew
  }
}
</script>
