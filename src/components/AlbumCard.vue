<template>
  <div class="w-64 h-64 mx-auto bg-gray-300 rounded-lg overflow-hidden" v-for="image in  selectedImage" :key="image.id">
    <img
      :src="image"
      alt="Random image"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// eslint-disable-next-line 
import axios from "axios";
// import { createClient } from 'pexels'

// const client = createClient('Z8AvARzqQjVdThq851WGRBlMmj3fzzYX8D4c1H3pfdalmx3h2mixLWrM')

const selectedImage = ref([])

function fetchRandomImage() {
  axios
    .get("https://www.pexels.com/collections/hygge-cuy17hv/", {
      
      headers: {
        "Authorization": "Z8AvARzqQjVdThq851WGRBlMmj3fzzYX8D4c1H3pfdalmx3h2mixLWrM"
      },
      
    })
    .then((response) => {
      selectedImage.value = response.data
    })
    .catch((error) => {
      console.error(error);
    });
}



onMounted(() => {
  fetchRandomImage();
});
</script>
