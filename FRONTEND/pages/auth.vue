<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <div class="text-3xl text-center">
        Loading. <br /> 
        Please Wait.                
      </div>

          

      <img
        src="~assets/images/loading.gif"
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 50%;
        "
      />
      <div class="text-sm text-center">Please do not reload this tab.</div>

    </div>
    <Footer />
  </div>
</template> 

<script>
export default {
  data(){
    return {
      data : this.$store.state.data.user
    }
  },
  mounted() {
    // Access the token from the URL query parameters
    const token = this.$route.query.token
    
    if (token) {
      // Dispatch an action to store the token in Vuex
      this.$store.commit('data/setToken', token)
      console.log('Token stored in Vuex:', token)
      console.log(this.$store.state)

      const decodedPayload = atob( token.split(".")[1].replace(/-/g, '+').replace(/_/g, '/'));
      const payloadJSON = JSON.parse(decodedPayload);
      
      this.$store.commit('data/setUser', payloadJSON)

      console.log("token is here ",payloadJSON)

      this.$router.push('dashboard')
    }

    const logout = this.$route.query.logout
    if (logout){
      console.log('Loggin out.')
      this.$router.push('/login')
    }
    
  }
}
</script>