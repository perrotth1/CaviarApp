<template>
    <form class="section" @submit.prevent="login()">
        <div class="box mx-6 my-6 p-6" id="loginBox">
            <div class="field">
                <label class="label">Email:</label>
                <div class="control">
                    <input class="input" type="email" placeholder="example@ex.com" v-model="email">
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

import session from '../services/session.js';


export default {
    Name: 'Login',
    data: () => ({
        email: null,
        password: null,
        session
    }),
    Components: {

    },
    methods: {
        login() {
            this.session.Login(this.email, this.password);
        }
    }
}

</script>
