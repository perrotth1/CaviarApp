<template>
  <div class="card">
    <div class="card-content">
      <div class="columns">
        <div class="column is-3">
          <span class="icon">
            <i class="fas fa-crown fa-2x"></i>
          </span>
        </div>
        <div class="column">
          <p class="title is-3">OUTFIT TITLE</p>
        </div>
      </div>
    </div>
    <div class="card-content has-background-black">
      <div class="card-image">
        <figure class="image" id="topImg">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-image">
        <figure class="image">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-image">
        <figure class="image">
          <img
            src="https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>
    </div>

    <div class="card-content">
      <div class="columns">
        <div class="column is-2">
          <span class="icon">
            <i class="fas fa-heart"></i>
          </span>
        </div>
        <div class="column is-2">
          <p class="title is-6">4455</p>
        </div>
        <div class="column is-5" style="margin-left: auto">
          <p class="card-subtitle">11:09 PM - 1 Jan 2016</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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