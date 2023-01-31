<template>
   <section>
    <div>
      <UserPage/>
    </div>
    <div>
      <router-view/>
    </div>
  </section>
</template>
  
  <script>
  // @ is an alias to /src
  import UserPage from '@/components/UserPage.vue'
  
  export default {
    name: 'UserPageView',
    components: {
      UserPage
    }
  }
  </script>