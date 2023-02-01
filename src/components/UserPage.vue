
<template>
    <!-- <h1>{{ user ? user.name : 'Loading...' }}</h1> -->
    <p >User ID: {{ user.id }}</p>
    <p >Email: {{ user.email }}</p>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed ,defineProps, onBeforeMount } from 'vue';
// import { ref } from 'vue';

const props = defineProps(["id"]);
const store = useStore()

const user = computed(() => store.getters.getCurrentUser )

onBeforeMount(()=>{
  // fetch user from store
  store.dispatch('fetchUser',props.id)
})

</script>
