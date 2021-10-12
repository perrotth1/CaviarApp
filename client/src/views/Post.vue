<template>
    <div class="box" id="postBox">
            <div class="columns">
                <div class="column">
                    <input class="input is-primary" type="text" placeholder="Outfit Title">
                </div>
            </div>

            <hr>

            <PostItemSelect />
            <PostItemSelect />
            <PostItemSelect />
            
            <hr>
            
            <textarea class="textarea" placeholder="Caption"></textarea>
            <br>
            <button class="button">Post</button>
        </div>
</template>

<script>
import PostItemSelect from '../components/PostItemSelect';

export default {
    name: 'Post',
    components: {
        PostItemSelect
    }
}
</script>
