<template>
  <section>
    {{ photos.length }}
    <div>

    </div>
    <div class="grid grid-cols-10 gap-4 p-10">
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" alt="album photos" />
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
console.log(albumId);

// const currentUser = computed(() => store.getters.getCurrentUser)
// const user =  store.getters.getCurrentUser
// const albumId = user.forEach(album => { album.id });

const photos = computed(() => store.getters.getUserAlbum);

onBeforeMount(() => {
  // fetch user from store
  // store.dispatch("fetchUser", props.id);
  // store.dispatch("fetchUserAlbums", props.id);
  store.dispatch("fetchPhotos", albumId);
});
</script>
