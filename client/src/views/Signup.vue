<template>
    <form class="container" @submit.prevent="register()">
        <div class="box mx-6 my-6 p-6" id="signupBox">
            <div class="field">
                <label class="label">First Name:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Christopher" v-model="firstName">
                </div>
            </div>

            <div class="field">
                <label class="label">Last Name:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Evil" v-model="lastName">
                </div>
            </div>

            <div class="field">
                <label class="label">Pick a Handle Starting With @:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="ex: @doctor_evil_1999" v-model="handle">
                </div>
            </div>

            <div class="field">
                <label class="label">Pick a Password:</label>
                <div class="control">
                    <input class="input" type="password" placeholder="*******" v-model="password">
                </div>
            </div>

            <div class="field">
                <label class="label">Enter Email:</label>
                <div class="control">
                    <input class="input" type="email" placeholder="example@ex.com" v-model="email">
                </div>
            </div>

            <div class="field">
                <label class="label">Profile picture link</label>
                <div class="control">
                    <input class="input" type="link"  v-model="profilePic">
                </div>
            </div>

            <div class="field">
                <p class="control">
                    <button class="button is-success" id="signupButton">Register</button>
                </p>
            </div>
        </div>
    </form>
</template>

<script>
import { Add } from '../services/users.js';
import router from '../router'

export default {
    Name: 'Signup',
    data: () => ({
        firstName: null,
        lastName: null,
        handle: null,
        password: null,
        email: null,
        profilePic: null
    }),
    methods: {
        register() {
            Add({
                firstName: this.firstName,
                lastName: this.lastName,
                userHandle: this.handle,
                password: this.password,
                profilePic: this.profilePic,
                isAdmin: false,
                email: this.email,
                followers: [],
                following: [],
                likedPosts: []
            });
            router.push('/login');
        }
    }
}

</script>
