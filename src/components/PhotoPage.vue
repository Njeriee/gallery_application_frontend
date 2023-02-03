<template>
  <section class="grid h-screen place-items-center">
    <div class="">
      <h1 class="text-center text-5xl py-4 font-bold text-amber-400">
        {{ photo.title }}
      </h1>
      <button class="my-4" @click="updateTitle" >edit title</button>
      <form class="my-4" action="">
        <input class="form-control block w-full px-3 py-1.5 text-base
        font-normal text-gray-700 bg-white bg-clip-padding border border-solid
        border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
        focus:bg-white focus:border-amber-400 focus:outline-none "
        id="exampleFormControlInput1" placeholder="enter new title name "
        v-model.lazy="newTitle" type="text">
      </form>
      <img :src="photo.url" alt="photo" />
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const photoId = route.params.id;
const photo = computed(() => store.getters.getPhotoDetails);
const newTitle = ref("");

function updateTitle() {
      store.dispatch('updateTitle', {
        id: photoId,
        title: newTitle.value
      })
    }      

onBeforeMount(() => {
  const data = store.dispatch("fetchPhotoDetails", photoId);
  console.log(data);
});
</script>
