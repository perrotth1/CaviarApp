<template>
  <div class="card">
    <div class="columns">
      <div class="column is-half">
        <div class="card-content has-background-black" id="outfitArea">
          <div class="card-image">
            <figure class="image" id="topImg">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/519pr6HAytL._AC_UL550_SR423,550_QL65_.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-image" id="pantImg">
            <figure class="image">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41qve4wrPYL._AC_UL550_SR423,550_QL65_.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="card-image" id="shoeImg">
            <figure class="image">
              <img
                src="https://m.media-amazon.com/images/I/81-YIHCJZ8L._AC_SX255_.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
        </div>
      </div>

      <div class="column is-half">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-2">OUTFIT TITLE</p>
            </div>
          </div>

          <div class="media">
            <div class="media-content">
              <div class="columns">

                  <div class="column is-2">
                  <span class="icon">
                    <i class="fas fa-heart"></i>
                  </span>
                  </div>
                  <div class="column is-2">
                  <p class="title is-6">4455</p>
                  </div>
                <div class="column is-3" style="margin-left:auto;">
                  <span class="icon">
                    <i class="fas fa-share"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="../assets/placeholders/user1avatar.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>

            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
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