<template>
    <form class="section" @submit.prevent="login()">
        <div class="box mx-6 my-6 p-6" id="loginBox">
            <div class="field">
                <label class="label">Email:</label>
                <div class="control">
                    <input class="input" type="text" placeholder="example@ex.com" v-model="handle">
                </div>
            </div>

            <div class="field">
                <label class="label">Password:</label>
                <div class="control">
                    <input class="input" type="password" placeholder="*******" v-model="password">
                </div>
            </div>

            <div class="field">
                <p class="control">
                    <button class="button is-success" id="loginButton">Login</button>
                </p>
            </div>
        </div>
    </form>
</template>

<script>

import Session from '../services/session.js';


export default {
    Name: 'Login',
    data: () => ({
        handle: null,
        password: null,
        Session
    }),
    Components: {

    },
    methods: {
        login() {
            this.Session.Login(this.handle, this.password);
        }
    }
}

</script>
