<template>
  <div>
    <div class="h-screen flex items-center justify-center">        
        <div>          
            <div class="text-2xl">Welcome to NSFDC ERP</div>                              
        </div>  
        <!-- Footer -->
        <Footer />
              
    </div>
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
      this.wait(2000)
      this.$router.push('/login')
  },
  methods : {
    wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
        end = new Date().getTime();
    }
  }
  }
};
</script>
