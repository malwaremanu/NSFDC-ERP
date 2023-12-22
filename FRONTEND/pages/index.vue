<template>
  <div>
    <div class="h-screen flex items-center justify-center">        
        <div>     
            <div>
              <img src="loginpage.png" />  
            </div>     
            <div class="text-2xl text-center px-4 py-2 font-semibold text-n-800">Welcome to NSFDC ERP</div>                              
        </div>  
        <!-- Footer -->
        <Footer />
              
    </div>
  </div>
</template>

<script>
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
