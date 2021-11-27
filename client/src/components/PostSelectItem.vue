<template>
  <div class="columns">
    <div class="column is-half">
      <div class="card-image">
        <figure class="image 128x128" id="topImgBlank" v-if="!imgSrc">
          <img src="../../../assets/blank.png" alt="Blank" />
        </figure>
        <figure class="image 128x128" id="topImg" v-else>
          <img :src="imgSrc" :alt="imgAlt" />
        </figure>
      </div>
    </div>
    <div class="column is-half">
      <p class="title is-4 has-text-white" v-if="prompt">{{ prompt }}</p>

    <div class="container">
      <div class="modal" :class="{ 'is-active': isActive }">
        <div class="modal-background"></div>
        <div class="modal-card">
          <form class="section" @submit.prevent="search()">
            <header class="modal-card-head">
              <input
                class="input is-primary"
                type="text"
                placeholder="Search..."
                v-model="searchTerm"
              />
              <button class="button is-success" type="button" id="searchButton" @click="search()">Search</button>
            </header>
            <section class="modal-card-body" v-if="searchResults">
                <div id="searchResultArea">
                    <div class="box" id="result" @click="emitToParent(r.B, r.A)" v-for="r in searchResults" :key="r._id">
                        <div class="columns">
                            <div class="column is-3">
                                <figure class="image is-64x64" id="topImg">
                                    <img :src="r.B" :alt="r.A" />
                                </figure>
                            </div>
                            <div class="column">
                                <p class="card-title is-4">{{r.A}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </form>
            
          <button
            class="modal-close is-large"
            type="button"
            aria-label="close"
            @click="closeModal()"
          ></button>
        </div>
      </div>
    </div>

      <button class="button" type="button" id="shirtSearchButton" @click="launchModal()">
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { Search } from '../services/items.js';

export default {
  props: {
    prompt: String,
    searchType: String,
  },
  data: () => ({
    imgSrc: null,
    imgAlt: null,
    isActive: false,
    searchTerm: null,
    searchResults: null
  }),
  methods: {
    launchModal() {
      this.isActive = true;
    },
    closeModal() {
      this.isActive = false;
    },
    async search() {
        if(this.searchTerm.length == 0) {
            this.searchResults = null;
        }
        else {
            this.searchResults = await Search(this.searchType, this.searchTerm);
        }
    },
    emitToParent(a_src, a_alt) {
        this.imgSrc = a_src;
        this.imgAlt = a_alt;
        this.$emit("childSelect", this.searchType, this.imgSrc, this.imgAlt);
        this.isActive = false;
    }
  }
};
</script>

<style>

.modal-card-body {
    height: 60vh;
    overflow-y: auto;
}

</style>