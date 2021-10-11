<template>
  <div class="container">
    <Nav />

    <router-view />
  </div>
</template>

<script>
import Nav from '../src/components/Nav'

export default {
  components: {
    Nav
  }

}
</script>


<style lang="scss">



</style>
