<template>
  <div>
    Counter: {{ data }}

    <div>
      Login Panel : 
      <br>

      <div @click="login()" class="px-4 py-2 bg-green-200">
        Login
      </div>

    </div>

    <nuxt-link to="about">about</nuxt-link>
  </div>
</template>

<script>
import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

export default {
  data() {
    return {
      data: this.$store.state.data,
    };
  },

  mounted() {
        this.$router.push('/login')
  }, 
  methods: {
    async login(){          
          const kinde = await createKindeClient({
          client_id: this.$store.state.data.kinde_details.client_id,
          domain: this.$store.state.data.kinde_details.host_url,
          redirect_uri: this.$store.state.data.kinde_details.redirect_url
        })
      
        await kinde.login();
      ;
    },
    incrementCounter() {
      this.$store.commit('incrementCounter');
    },
    decrementCounter() {
      this.$store.commit('decrementCounter');
    },
  },
};
</script>
