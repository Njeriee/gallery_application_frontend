<template>
    <div class="">
      <RegistrationPage/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import RegistrationPage from '@/components/RegistrationPage.vue'
  
  export default {
    name: 'LoginView',
    components: {
      RegistrationPage
    }
  }
  </script>