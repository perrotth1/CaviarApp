<template>
<div class="section">
    <div class="columns">
        <div class="column is-half">
            <UserProfileCard/>
        </div>
        <div class="column is-half">
            <UserPostMinimal/>
        </div>
    </div>

    //WALL HERE
</div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue';
import UserPostMinimal from '../components/UserPostMinimal.vue';

export default {
    Name: 'Profile',
    components: { 
        UserProfileCard,
        UserPostMinimal
    }
}
</script>

<style>

</style>