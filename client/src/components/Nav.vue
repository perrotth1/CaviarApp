<template>
    <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/CAVIARlogo.png" height="50">
            </a>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        
        <div class="navbar-menu" :class="{'is-active': isActive }">
            <div class="navbar-start">
            <a class="navbar-item" href="profile.html"> 
                <figure class="image"> 
                    <img src="../assets/placeholders/user1avatar.png" height="50">
                </figure>
            </a>
        
            <a class="navbar-item" href="/">
                <span class="icon"> 
                    <i class="fas fa-home"></i>
                </span>
            </a>

            <a class="navbar-item" href="explore.html">
                <span class="icon"> 
                    <i class="fas fa-search"></i>
                </span>
            </a>

            <a class="navbar-item" href="/post">
                <span class="icon"> 
                    <i class="fas fa-comment-alt"></i>
                </span>
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                More
                </a>
                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                </div>
            </div>
            </div>
        
            <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                <a class="button is-primary" href="/signup">
                    <strong>Sign up</strong>
                </a>
                <a class="button is-light" href="/login">
                    Log in
                </a>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">

$primary: red;
$body-background-color: red;
$background: red;

</style>

<script>

export default {
    data(){
        return {
            isActive: false
        }
    }
}

</script>

