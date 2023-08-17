<template>
  <div>
    <div>
      This is sample content
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  beforeMount() {
    // Check if you're on the index page
    if (this.$route.name === 'index') {
      // Redirect to the login page
      this.$router.push('/login');
    }
  }
}
</script>