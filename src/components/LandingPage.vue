<template>
  <section class=" ">
    <div class="flex flex-row h-screen">
      <div class="basis-1/2 grid grid-flow-row place-items-center">
        <div class="mx-5">
            <h1 class="text-8xl font-bold text-start pb-5">Hey there! <br> welcome to <span class="text-amber-500"> my <br> album</span>
              application</h1>
            <p class="text-start text-4xl text-amber-500 font-thin">
              A simpler & faster access to your photos
            </p>
        </div>
        <div class="pb-20">
          <!-- <button>log in</button> -->
        </div>
      </div>
      <div class="basis-1/2 flex flex-col">
        <div class=" ">
          <img class="h-5/6 w-4/6 object-cover hidden md:block" src="@/assets/images/landing_page_img1.jpg" alt="landing_page_img1">
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
