<template>
  <div>
    <!-- Your layout content here -->
    <nuxt />
  </div>
</template>

<script>
export default {
  setup() {
    const { store, route, redirect } = useNuxt()

    
    
    // Check if the user is authenticated in your Vuex store
    if (!store.state.auth.user && route.path !== '/auth') {
      // If not authenticated and not already on the /auth page, redirect to the /auth page
      redirect('/auth')
    }
  }
}
</script>
