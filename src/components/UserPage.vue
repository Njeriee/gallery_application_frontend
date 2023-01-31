<template>
    <section class="flex flex-col">
        
        <div v-if="user"  class="py-5 md:py-8">
            <p>{{ user.name }}</p>{{ user }}
            <h1 class="text-center text-xl md:text-5xl">My Albums</h1></div>
    {{ route.params.id }}
        <div class="grid h-screen place-items-center">            

        </div>
        <div>

            
        </div>    
    </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';


const store = useStore()
const route = useRoute()
const userId = parseInt(route.params)
console.log(userId)

// fetch user from the store
// eslint-disable-next-line
const user = computed(() => store.dispatch("fetchUser",userId))

onMounted(() => {
   
    user
})    
</script>