<template>
        <div class="w-full flex flex-wrap h-screen bg-amber-50">
      <!-- Login Section -->
      <div class="w-full md:w-1/2 flex flex-col">
        <div
          class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24"
        >
          <a href="#" class="bg-black text-white font-bold text-xl p-4">Logo</a>
        </div>
  
        <div
          class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
        >
          <p class="text-center text-amber-500 text-3xl">Welcome.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            @submit.prevent= "registerUser"
          >
            <div class="flex flex-col pt-4">
              <label for="email" class="text-lg">Email</label>
              <input
                v-model.trim="Email"
                type="email"                
                placeholder="your@email.com"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              
            </div>
  
            <div class="flex flex-col pt-4">
              <label for="password" class="text-lg">Password</label>
              <input
                v-model.trim="Password"
                type="password"
                id="password"
                placeholder="Password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              <!-- <p class="animate-bounce md:w-2/4 text-gray-600 my-2 p-2 text-center rounded-md bg-red-100" v-if="errors.password">{{ errors.password }}</p> -->
            </div>
          </form>
          <div class="text-center pt-12 pb-12">
            <div class="flex justify-between items-center mb-6">
            <a
              href="#!"
              class="text-amber-500 hover:text-amber-500 focus:text-amber-500 active:text-amber-500 duration-200 transition ease-in-out"
              >Forgot password?</a
            >
          </div>
                    <!-- Submit button -->
            <button
            @click="registerUser"
            type="submit"
            class="inline-block px-7 py-3 bg-amber-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-amber-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out w-full"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Sign up
          </button>
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">OR</p>
          </div>

          <button
          @click="signInWithGoogle"
            class="px-7 py-3 bg-red-500  hover:bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
          >
            <!-- Google -->
            <svg class="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            Continue with Google
          </button>
          </div>
        </div>
      </div>
  
      <!-- Image Section -->
      <div class="w-1/2 shadow-2xl justify-center">
        <img
          class="h-5/6 w-4/6 object-cover hidden md:block"
          src="@/assets/images/log_in_page_img.jpg"
        />
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'vue-router'


const Email = ref('')
const Password = ref('')
const router = useRouter()
let errorMsg = ref()

// functions
const registerUser = () => {
  createUserWithEmailAndPassword(getAuth(), Email.value, Password.value)
  .then(() => {
    console.log('successfully registered')
    router.push('/admin')
  })
  .catch((error) => {
    switch(error.code){
      case 'auth/invalid-email':
        errorMsg.value =  'Invalid email'
        break
      case 'auth/invalid-password':
        errorMsg.value =  'password cannot be less than 6 characters'
        break  
      default:
        errorMsg.value = 'Email or password was incorrect'
        break   

    }
  })
}

</script>