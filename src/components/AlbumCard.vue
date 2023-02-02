<template>
  <div class="w-64 h-64 mx-auto bg-gray-300 rounded-lg overflow-hidden">
    <img
      :src="selectedImage"
      alt="Random image"
      class="w-full h-full object-cover"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const selectedImage = ref("")

function fetchRandomImage() {
  axios
    .get("https://api.pexels.com/v1/photos/random", {
      headers: {
        Authorization: "YOUR_API_KEY_HERE",
      },
    })
    .then((response) => {
      selectedImage.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}



onMounted(() => {
  fetchRandomImage();
});
</script>
