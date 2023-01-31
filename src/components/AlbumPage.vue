<template>
  <h1>My Albums</h1>
  <div>
    <button @click="fetchAlbums(1)">Fetch Albums for User 1</button>
    <button @click="fetchAlbums(2)">Fetch Albums for User 2</button>
    <br />
    <!-- <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user }}</li>
    </ul> -->
    <ul v-if="albums.length">
      <li v-for="album in albums" :key="album.id">{{ album.userId }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted } from "@vue/runtime-core";

import { useStore } from "vuex";

const store = useStore();

// function fetchAlbums() {
//   let users = store.getters.getUsers;
//   var userId = [];
//   var ids;

//   for (var i = 0; i < users.length; i++) {
//     ids = users[i].id;
//     console.log(ids);
//     userId[i] = ids

//   }
//   console.log("we have the id");
//   console.log(userId);
//   store.dispatch("fetchUserAlbums", userId);
  
// }

function fetchAlbums(userId){
    store.dispatch("fetchUserAlbums", userId)
}
const albums = computed(() => store.getters.getAlbums);

onMounted(() => {
  store.dispatch("fetchUsers");
  // store.dispatch('fetchAlbums')
  // console.log('albums here111')
});
</script>
