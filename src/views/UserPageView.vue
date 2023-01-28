<template>
    <div>
      <UserPage/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import UserPage from '@/components/UserPage.vue'
  
  export default {
    name: 'LoginView',
    components: {
      UserPage
    }
  }
  </script>