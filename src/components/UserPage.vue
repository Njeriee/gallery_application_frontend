<template>
  <section>
    <div class="container mx-auto p-10">
      <div class="flex items-center">
        <img
          class="w-48 h-48 rounded-full mr-10"
          src="https://img.freepik.com/free-vector/user-follower-icons-social-media-notification-icon-speech-bubbles-vector-illustration_56104-847.jpg?t=st=1740330444~exp=1740334044~hmac=748a3bc5edd404cd69614f2c8fa04d95df56a269e1f075ddf6940eae362e55e3&w=900"
          alt="User Avatar"
        />
        <div>
          <h1 class="text-3xl font-bold text-amber-400">{{ user.username }}</h1>
          <p class="text-gray-600">{{ user.name }}</p>
          <p class="text-gray-600">{{ user.email }}</p>
          <p>{{ user.id }}</p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mx-auto p-10">
      <div>
        <h1 class="py-10 text-center text-4xl md:text-5xl text-amber-400 font-bold">User Albums</h1>
      </div>
      <div class="grid md:grid-cols-5 gap-4 py-10"> 
        <router-link v-for="album in user.album" :key="album.id" :to="`/users/${user.id}/albums/${album.id}`">
          <AlbumCard/>
          <p class="px-5 my-2 font-bold text-center text-amber-400"> {{ album.title }}</p>
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

const props = defineProps(["id"],'heyyyyyy');
console.log(props) 
const store = useStore();

const user = computed(() => store.getters.getCurrentUser);

onBeforeMount(() => {
  // fetch user from store
  store.dispatch("fetchUser", props.id);
  store.dispatch("fetchUserAlbums", props.id);
});
</script>
