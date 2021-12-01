<template>
<div class="section">
    <header>
    <input
        class="input is-primary"
        type="text"
        placeholder="Search for users by handle..."
        v-model="searchTerm"
        />
    <button class="button is-success" type="button" id="searchButton" @click="search()">Search</button>
    </header>

    <!--If not searched yet, show top users-->
    <div class="section" v-if="!searchResults">
        <div v-for="u in topUsers" :key="u._id">
            <user-profile-listing :user="u" />
        </div>
    </div>
    <!--Else show search results-->
    <div class="section" v-else>
        <div v-for="u in searchResults" :key="u._id">
            <user-profile-listing :user="u" />
        </div>
    </div>

</div>

</template>

<script>
import UserProfileListing from "../components/UserProfileListing.vue";
 
import { GetAll } from "../services/users.js";
import { Search } from "../services/users.js";

export default {
    components: {
        UserProfileListing
    },
    data: () => ({
        topUsers: null,
        searchTerm: null,
        searchResults: null,
        showFollowButtons: null,

    }),
    methods: {
        async getTopUsers() {
            this.topUsers = await GetAll();

        },
        async search() {
            this.searchResults = await Search(this.searchTerm);
        }
    },
    async mounted() {
        this.getTopUsers();
        
    }

}

</script>

<style>

</style>