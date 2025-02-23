<template>
  <section class="text-black">
    <div class="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid lg:grid-cols-2 flex items-center">
          <div class="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
            <div class="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px);">
              <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">Hey there! <br> welcome to <span class="text-amber-500"> my <br> album</span>
              application</h1>
              <p class="md:text-2xl text-xl pb-5 md:pb-10">
                A simpler and faster way to access your photos
              </p>
              <p class="inline-block px-7 py-3 mb-2 md:mb-0 md:mr-2 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >click the login button to get you started</p>
              <a class="inline-block px-7 py-3 ml-2 bg-transparent text-amber-500 font-medium text-sm leading-snug uppercase rounded hover:text-white hover:bg-black focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/login" role="button">Log in</a>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <img
              src="@/assets/images/landing_page_img1.jpg"
              class="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from 'vue'


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
