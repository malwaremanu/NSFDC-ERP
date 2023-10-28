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
import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

export default {
  data() {
    return {
      kinde: null,
      kindeDetails: this.$store.state.data.kinde_details,
    };
  },
  computed: {
    user() {
      return this.$store.state.data.user;
    },
    isAuthenticated() {
      return this.$store.state.data.is_authenticated;
    },
  },
  methods: {
    async switchViews(a, b) {
      [...a].forEach((v) => v.removeAttribute("hidden"));
      [...b].forEach((v) => v.setAttribute("hidden", true));
    },
    async renderLoggedInView(user) {
      const uu = await this.kinde.getToken();
      this.$store.commit("data/setToken", uu);
    },
    async renderLoggedOutView() {
      // Your existing code
    },
    async gettoken() {
      this.kinde.getToken();
    },
    async render(user) {
      if (user) {
        this.renderLoggedInView(user);
      } else {
        this.renderLoggedOutView();
      }
    },
    async addKindeEvent(id) {
      document.getElementById(id).addEventListener("click", async () => {
        await this.kinde[id]();
      });
    },
  },
  async mounted() {
    this.kinde = await createKindeClient({
      client_id: this.kindeDetails.client_id,
      domain: this.kindeDetails.host_url,
      redirect_uri: this.kindeDetails.redirect_url,
      is_dangerously_use_local_storage: true,
      on_redirect_callback: (user, appState) => {
        console.log({ user, appState });
        if (user) {
          this.renderLoggedInView(user);
          this.$store.commit("data/setUser", user);
          this.$store.commit("data/setAuthentication", true);
          this.$router.push("/dashboard");
        } else {
          this.renderLoggedOutView();
          this.$store.commit("data/setAuthentication", false);

          // this.$router.push('/login');
        }
      },
    });

    // Handle page load
    const user = await this.kinde.getUser();
    await this.render(user);

    // If user is not authenticated, trigger login
    if (!this.isAuthenticated) {
      await this.kinde.login();
      const uu = await this.kinde.getToken();
    }

    // If logout is present in the query parameters, trigger logout
    if (this.$route.query.logout) {
      await this.kinde.logout();
      console.log("Tried to logout");
      console.log(this.$store.state.data);
      // this.$router.push('/login');
    }
  },
};
</script>
