<template>
<div class="section">
  <div class="card">
    <form  @submit.prevent="publishPost()">
      <div class="columns">
        <div class="column is-half">
          <div class="card-content has-background-black" id="outfitArea">
            <!-- item select area -->
            <post-select-item
              :prompt="'Select a top...'"
              :searchType="'tops'"
              v-on:childSelect="itemSelect"
            />
            <post-select-item
              :prompt="'Select pants...'"
              :searchType="'pants'"
              v-on:childSelect="itemSelect"
            />
            <post-select-item
              :prompt="'Select shoes...'"
              :searchType="'shoes'"
              v-on:childSelect="itemSelect"
            />
          </div>
        </div>
        <div class="column is-half">
          <div class="card-content">
            <div class="media">
              <input
                class="input is-primary"
                type="text"
                placeholder="Outfit Title"
                v-model="title"
              />
            </div>

            <div class="media" v-if="Session.user">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img :src="Session.user.profilePic" alt="Profile picture" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-4">{{ fullName }}</p>
                <p class="subtitle is-6">{{ Session.user.userHandle }}</p>
              </div>
            </div>

            <div class="content">
              <textarea
                class="textarea"
                placeholder="Write some words about the style, brands, and anything else that comes to mind!"
                v-model="caption"
              ></textarea>
            </div>

            <button
              class="button is-primary"
              id="shirtSearchButton"
              style="margin-left: auto"
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { Add } from "../services/posts.js";
import Session from "../services/session.js";
import router from "../router";
import PostSelectItem from "../components/PostSelectItem.vue";

export default {
  data: () => ({
    Session,
    imgTopSrc: null,
    imgTopAlt: null,
    imgPantsSrc: null,
    imgPantsAlt: null,
    imgShoesSrc: null,
    imgShoesAlt: null,
    title: null,
    caption: null,
  }),
  computed: {
    fullName() {
      return Session.user.firstName + " " + Session.user.lastName;
    },
  },
  methods: {
    publishPost() {
      Add({
        userHandle: Session.user.userHandle,
        firstName: "",
        lastName: "",
        profilePic: "",
        title: this.title,
        imgTopSrc: this.imgTopSrc,
        imgTopAlt: this.imgTopAlt,
        imgPantsSrc: this.imgPantsSrc,
        imgPantsAlt: this.imgPantsAlt,
        imgShoesSrc: this.imgShoesSrc,
        imgShoesAlt: this.imgShoesAlt,
        postTime: "",
        caption: this.caption,
        likes: 0,
        isPublic: true,
      });
      router.push("/");
    },
    itemSelect(a_type, a_src, a_alt) {
      switch (a_type) {
        case "tops":
          this.imgTopSrc = a_src;
          this.imgTopAlt = a_alt;
          break;
        case "pants":
          this.imgPantsSrc = a_src;
          this.imgPantsAlt = a_alt;
          break;
        case "shoes":
          this.imgShoesSrc = a_src;
          this.imgShoesAlt = a_alt;
          break;

        default:
          throw { msg: "Incorrect selection type" };
      }
    },
  },
  components: {
    PostSelectItem,
  },
};
</script>

<style>
.card-image {
  max-width: 200px;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>