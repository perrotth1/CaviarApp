<template>
<div>
  <FeedUserPost />

  <FeedUserPost />

  <FeedUserPost />

  <FeedUserPost />
</div>
</template>

<script>
// @ is an alias to /src

import FeedUserPost from '../components/FeedUserPost';

export default {
  name: 'Home',
  components: {
    FeedUserPost
  }
}
</script>
