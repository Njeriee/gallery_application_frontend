<template>
  <section>
    <div class="container mx-auto p-10">
      <div class="flex items-center">
        <img
          class="w-48 h-48 rounded-full mr-10"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <div>
          <h1 class="text-3xl font-bold">{{ user.name }}</h1>
          <p class="text-gray-600">{{ user.email }}</p>
          <p>{{ user.id }}</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto p-10">
      <div>
        <h1 class="py-10 text-center md:text-5xl">User Albums</h1>
      </div>
      <div class="grid grid-cols-5 gap-4 py-10"> 
        <router-link v-for="album in user.album" :key="album.id" :to="`/users/${user.id}/albums/${album.id}`">
          <AlbumCard/>
        </router-link>   
        
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineProps, onBeforeMount } from "vue";
import AlbumCard from "./AlbumCard.vue";
// import { ref } from 'vue';

const props = defineProps(["id"]);
const store = useStore();

const user = computed(() => store.getters.getCurrentUser);

onBeforeMount(() => {
  // fetch user from store
  store.dispatch("fetchUser", props.id);
  store.dispatch("fetchUserAlbums", props.id);
});
</script>
