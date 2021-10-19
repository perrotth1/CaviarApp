<template>
  <div class="buttons" v-if="!Session.user">
    <router-link class="button is-primary" to="/signup">
      <strong>Sign up</strong>
    </router-link>
    <router-link class="button is-primary" to="/login">
        Log in 
    </router-link>
  </div>
  <div v-else>
      Hello {{name}}
  </div>
</template>


<script>
import Session from '../services/session';

export default {
    data (){
        return ({
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
        }
    },
    computed: {
        name() {
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}

</script>
