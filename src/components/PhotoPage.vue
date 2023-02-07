<template>
  <section class="grid h-screen place-items-center px-5">
    <div class="">
      <h1 class="text-center text-5xl py-4 font-bold text-amber-400">
        {{ photo.title }}
      </h1>
      <button
        class="my-4 rounded-lg bg-black px-4 py-2 text-amber-400"
        @click="updateTitle"
      >
        edit title
      </button>
      <form
        @submit.prevent="updateTitle"
        id="changeTitleForm"
        class="my-4"
        action=""
      >
        <input
          class="form-control block w-2/3 md:w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-400 focus:outline-none"
          placeholder="enter new title name "
          v-model.lazy="newTitle"
          type="text"
        />
      </form>
      <img :src="photo.url" alt="photo" />
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const store = useStore();
const route = useRoute();

const photoId = route.params.id;
const photo = computed(() => store.getters.getPhotoDetails);
// let title = ref(photo.value.title);
const newTitle = ref("");

const updateTitle = async () => {
       await axios.put(`https://jsonplaceholder.typicode.com/photos/${photo.value.id}`, {
        title: newTitle.value        
      })
      
      store.dispatch('updatePhotoDetails',{ id: photo.value.id, title: newTitle.value })
      newTitle.value = ''
      document.getElementById("changeTitleForm").reset()
    }
    
onBeforeMount(() => {
   store.dispatch("fetchPhotoDetails", photoId);
});
</script>
