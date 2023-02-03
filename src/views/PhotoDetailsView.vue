<template>
    <div class="">
      <PhotoPage/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import PhotoPage from '@/components/PhotoPage.vue'
  
  export default {
    name: 'LoginView',
    components: {
        PhotoPage
    }
  }
  </script>