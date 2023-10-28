<template>
<div>  

<div>
    Kinde Creds : {{ this.$store.state.data.kinde_details }} <br>
    User : {{ this.$store.state.data }} <br>

    <br>
    <nuxt-link to="/">Home</nuxt-link>
    <br>

</div>
    <header>
    <nav class="nav container">
        <h1 class="text-display-3">KindeAuth</h1>
        <div class="js-logged-out-view">
        <button id="login" class="btn btn-ghost sign-in-btn">
            Sign in
        </button>
        <button id="register" class="btn btn-dark">
            Sign up
        </button>
        </div>
        <div class="js-logged-in-view" hidden>
        <div class="profile-blob">
            <div hidden class="js-user-avatar avatar"></div>
            <img
            class="js-user-avatar-picture avatar" 
            alt="user profile avatar"
            hidden
            />
            <div>
            <p class="js-user-name text-heading-2"></p>
            <button id="logout" class="text-subtle">
                Sign out
            </button>
            </div>
        </div>
        </div>
    </nav>
    </header>

    <main>
    <div class="container">

        <div class="js-logged-out-view">
            <div class="card hero">
                <p class="text-display-1 hero-title">
                Let's start authenticating <br /> with KindeAuth
                </p>
                <p class="text-body-1 hero-tagline">Configure your app</p>

                <a
                    href="https://kinde.com/docs/sdks/javascript-sdk"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-light btn-big"
                    >
                    Go to docs
                </a>

            </div>
        </div>

        <div class="js-logged-in-view" hidden>
            <div class="card start-hero">
                <p class="text-body-2 start-hero-intro">Woohoo!</p>
                <p class="text-display-2">
                Your authentication is all sorted.
                <br />
                Build the important stuff.
                </p>
            </div>
            <section class="next-steps-section">
                <h2 class="text-heading-1">Next steps for you</h2>
            </section>
        </div>
    </div>
    </main>

    <footer class="footer">
    <div class="container">
        <strong class="text-heading-2">KindeAuth</strong>
        <p class="footer-tagline text-body-3">
        Visit our
        <a class="link" href="https://kinde.com/docs">
            help center
        </a>
        </p>

        <small class="text-subtle">
        © 2023 KindeAuth, Inc. All rights reserved
        </small>
    </div>
    </footer>

</div>
</template>
  
<script>
  import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";
  
  export default {
    data() {
      return {
        kinde: null,
        kindeDetails : this.$store.state.data.kinde_details,
      };
    },
    computed: {
      user() {
        return this.$store.state.data.user;
      },
      isAuthenticated() {
        return this.$store.state.data.is_authenticated;
      }
    },
    methods: {
      async switchViews(a, b) {
        [...a].forEach(v => v.removeAttribute('hidden'));
        [...b].forEach(v => v.setAttribute("hidden", true));
      },
      async renderLoggedInView(user) {
        // Your existing code
      },
      async renderLoggedOutView() {
        // Your existing code
      },
      async render(user) {
        if (user) {
          this.renderLoggedInView(user);
        } else {
          this.renderLoggedOutView();
        }
      },
      async addKindeEvent(id) {
        document.getElementById(id).addEventListener('click', async () => {
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
          console.log({user, appState});
            if (user) {                
                this.renderLoggedInView(user);
                this.$store.commit('data/setUser', user);
                this.$store.commit('data/setAuthentication', true);
                this.$router.push('/dashboard')
            } else {
                this.renderLoggedOutView();
                this.$store.commit('data/setAuthentication', false);
            }
        }
      });
  
      ['login', 'register', 'logout'].forEach(this.addKindeEvent);
  
      // Handle page load
      const user = await this.kinde.getUser();
      await this.render(user);
    },
  };
  </script>