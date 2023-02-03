<template>
  <section>
    <div class="grid grid-cols-10 gap-4 p-10">
      <div v-for="photo in photos" :key="photo.id">
        <router-link :to="`/users/${user.id}/albums/${photo.albumId}/photos/${photo.id}`"><img :src="photo.url" alt="album photos" /></router-link>
      
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

const albumId = route.params.id;
const photos = computed(() => store.getters.getUserAlbum)
const user = computed(() => store.getters.getCurrentUser)
// const photoId = photos.value.id

// photoDetails (() =>{
//   photoId.forEach(i => {
    
//   });
// })

onBeforeMount(() => {

  store.dispatch("fetchPhotos", albumId);
});
</script>
