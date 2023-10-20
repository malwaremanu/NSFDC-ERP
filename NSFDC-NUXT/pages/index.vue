<template>
  <div>
    Counter: {{ data }}

    <div class="flex items-center gap-3">
      <button class="px-4 py-2 bg-green-200" @click="incrementCounter">+</button>
      <button class="px-4 py-2 bg-green-200" @click="decrementCounter">-</button>
    </div>

    <nuxt-link to="about">about</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.data.user,
    };
  },
  methods: {
    incrementCounter() {
      this.$store.commit('incrementCounter');
    },
    decrementCounter() {
      this.$store.commit('decrementCounter');
    },
  },
};
</script>
