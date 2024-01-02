<template>
  <div>
    <div class="h-2 bg-n-900 font-semibold"></div>
    <div class="grid grid-cols-2">
      <div>
        <img
          class="min-h-screen object-cover"
          :src="imageURL"
          alt=""
        />
      </div>
      <div>
        <div class="mx-auto mt-20">
          <img
            class="mx-auto max-h-[250px]"
            src="/logo.png"
          />

          <div class="grid grid-cols-5">
            <div></div>
            <div class="col-span-3">
              <div class="text-xl mt-10 text-center font-semibold">
                ERP Login Panel
              </div>

              <img class="hidden" src="~assets/images/loading.gif" />

              <div class="mt-10 text-center flex flex-col gap-2 items-center">
                <a href="https://auth0.manupal.dev/c/ccvkwpl41wm1?r=https://erp.nsfdcdigital.in/auth"                  
                  class="px-4 py-2 bg-n-700 m-2 text-white rounded-full select-none cursor-pointer animate-bounce">
                  Login
                </a>             

                <div class="flex items-center gap-2">
                  <a target="_blank" href="http://l.bankmill.in:8548/rgda/index.html?organization=636a392e5a1863baa1716512" >
                  <button class="w-full px-4 py-2 bg-green-700 m-2 text-white rounded-full select-none cursor-pointer" 
                  type="button"> Bankmill 1 </button>                  
                  </a>

                  <a target="_blank" href="http://l2.bankmill.in:8548/rgda/index.html?organization=636a392e5a1863baa1716512" >
                    <button class="w-full px-4 py-2 bg-green-700 m-2 text-white rounded-full select-none cursor-pointer" 
                    type="button"> Bankmill 2 </button>                  
                  </a>
                </div>
              </div>

              <div class="hidden">
                <div class="text-align-left px-4 py-2">
                  <div>Username</div>
                  <input type="text" class="input" />
                </div>
                <div class="text-align-left px-4 py-2">
                  <div>Password</div>
                  <input type="password" class="input" />
                </div>

                <div
                  class="text-align-left px-4 py-2 flex items-center gap-2 justify-between"
                >
                  <button
                    @click="login"
                    class="px-4 py-2 bg-n-900 text-white rounded-md hover:shadow-xl"
                    key="dashboard-link"
                  >
                    Submit
                  </button>
                  <button
                    class="px-4 py-2 text-blue-900 rounded-md hover:underline"
                  >
                    Forgot username or password?
                  </button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      imageURL : 'https://nsfdc.nic.in/assets/images/magazine/carousel/1.jpg',
      currentImageIndex : 1,
      totalImages : 6,
    }
  },
  middleware: "authenticated",
  mounted() {
    console.log("Initiated.");
    setInterval(this.changeImageURL, 5000); 
  },
  methods: {
    login() {
      var url =
        "https://nsfdc.kinde.com/oauth2/auth?response_type=code&client_id=71413cbda747439dbee2e716f4b2bb83&redirect_uri=http://localhost:3000&scope=openid+profile+email&state=abc";
      this.$router.push(url);
    },
    changeImageURL() {      
      console.log("changing now...", this.imageURL)
      this.imageURL = `https://nsfdc.nic.in/assets/images/magazine/carousel/${this.currentImageIndex}.jpg`;    
      this.currentImageIndex = (this.currentImageIndex % this.totalImages) + 1;
    }

  },
};
</script>
