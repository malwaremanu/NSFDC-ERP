<template>
    <div>
      Counter in Another Page: {{ counter }}
    </div>
  </template>
  
  <script>
    import { mapState } from 'vuex';
  
    export default {
      computed: {
        ...mapState(['counter']),
      },
    };
  </script>
  