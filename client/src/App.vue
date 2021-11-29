<template>
  <div class="appBackground">
    <Nav />

    <router-view />

  </div>
  
</template>

<script>
import Nav from './components/Nav';



export default {
  components: {
    Nav
  }
  

};
</script>

<style scoped>

.appBackground {
  background-color: rgb(187, 220, 224);
}

</style>



