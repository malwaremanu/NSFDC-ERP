<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />

    <div class="flex items-center p-4 justify-between">
      <div>
        <img src="~/assets/images/logo.png" />
      </div>
      <div class="flex items-center p-2 justify-between gap-4">
        <div class="flex gap-4">
          <div class="bg-n-900 rounded-full text-white p-2 cursor-pointer">
            <svg
              class="h-5 w-5 text-white font-semibold"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </div>

          <div class="bg-violet-900 rounded-full text-white p-2 cursor-pointer">
            <svg
              class="h-5 w-5 text-white font-semibold"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </div>
        </div>
        <div class="select-none cursor-pointer">
          <div v-if="!this.$store.state.data.user.given_name">
            <nuxt-link to="/auth">
              <Icon
                name="material-symbols:sync-rounded"
                color="red"
                size="2em"
                class="animate-bounce"
              />
            </nuxt-link>
          </div>
          <div class="text-lg font-semibold">
            {{ this.$store.state.data.user.given_name }}
            {{ this.$store.state.data.user.family_name }}
          </div>
          <div
            v-if="this.$store.state.data.user.given_name"
            class="text-xs text-right"
          >
            JUNIOR EXECUTIVE - IT
          </div>
        </div>

        <nuxt-link
          to="auth?logout=true"
          class="px-4 py-2 bg-red-800 hover:bg-red-600 cursor-pointer text-white flex items-center gap-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          logout
        </nuxt-link>
      </div>
    </div>

    <div
      x-show="open"
      x-data="{ open: true }"
      class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
    >
      <div
        class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        ></div>
      </div>
      <div
        class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style="
            clip-path: polygon(
              74.8% 41.9%,
              97.2% 73.2%,
              100% 34.9%,
              92.5% 0.4%,
              87.5% 0%,
              75% 28.6%,
              58.5% 54.6%,
              50.1% 56.8%,
              46.9% 44%,
              48.3% 17.4%,
              24.7% 53.9%,
              0% 27.9%,
              11.9% 74.2%,
              24.9% 54.1%,
              68.6% 100%,
              74.8% 41.9%
            );
          "
        ></div>
      </div>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p class="text-sm leading-6 text-gray-900">
          <strong class="font-semibold">New Joinee</strong
          ><svg
            viewBox="0 0 2 2"
            class="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          Mr. Manupal Choudhary as recently joined our organisation as Junior
          Executive - IT
        </p>
        <a
          href="#"
          class="flex-none rounded-full bg-n-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-n-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-n-900"
          >read more <span aria-hidden="true">&rarr;</span></a
        >
      </div>
      <div class="flex flex-1 justify-end">
        <button
          type="button"
          @click="open = false"
          class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span class="sr-only">Dismiss</span>
          <svg
            class="h-5 w-5 text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="bg-n-900 text-white px-3 flex items-center uppercase">
      <nuxt-link
        to="/dashboard"
        class="hover:bg-n-700 px-4 py-2 cursor-pointer"
      >
        Dashboard
      </nuxt-link>

      <nuxt-link to="/library" class="hover:bg-n-700 px-4 py-2 cursor-pointer">
        Library
      </nuxt-link>

      <nuxt-link
        to="/loan-finance"
        class="hover:bg-n-700 px-4 py-2 cursor-pointer"
      >
        Loan Finance
      </nuxt-link>

      <div
        class="hover:bg-n-700 px-4 py-2 cursor-pointer"
        v-for="h in hlinks"
        :key="h"
        @click="al('ERP is Under Development. Please wait for its Launch.')"
      >
        {{ h }}
      </div>

      <nuxt-link to="/masters" class="hover:bg-n-700 px-4 py-2 cursor-pointer">
        Masters
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hlinks: ["HR & Admin", "MIS", "Investment and assets"],
    };
  },
  methods: {
    logout() {},
    al(x) {
      alert(x);
    },
  },
};
</script>
