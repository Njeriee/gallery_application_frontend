<template>
  <div class="w-full flex flex-wrap h-screen bg-amber-50">
    <!-- Login Section -->
    <div class="w-full md:w-1/2 flex flex-col">
      <div
        class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32"
      >
        <p class="text-center text-amber-500 text-3xl">Welcome back.</p>
        <form 
          class="flex flex-col pt-3 md:pt-8"
          @submit.prevent= "loginUser"
        >
          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input
              v-model="Email"
              type="email"
              id="email"
              placeholder="use the email : test6@xyz.com"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class=" animate-bounce md:w-2/4 text-gray-600 my-4 p-2 text-center rounded-md bg-red-100" v-if="errorMsg == 'Invalid email' " >{{ errorMsg }}</p>
          </div>
          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              v-model="Password"
              type="password"
              id="password"
              placeholder="the password is : 123456"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p class="animate-bounce md:w-2/4 text-gray-600 my-2 p-2 text-center rounded-md bg-red-100" v-if="errorMsg == 'Incorrect password'" >{{ errorMsg }}</p>
          </div>

          <input
            on-click="loginUser"
            type="submit"
            value="Log In"
            class="bg-amber-500 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
          />
        </form>
        <div class="text-center pt-12 pb-12">
          <p>
            Don't have an account?
            <a href="/signup" class="text-amber-500 underline font-semibold"
              >Register here.</a
            >
          </p>
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
import { ref } from 'vue'
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from 'vue-router'
// import { onBeforeMount } from '@vue/runtime-core'

const Email = ref('')
const Password = ref('')
const router = useRouter()


// onBeforeMount ( ()=> {
//   Email = " ";
//   Password = "";
// }
// )
let errorMsg = ref()

// login function
const loginUser = () => {
  signInWithEmailAndPassword(getAuth(), Email.value, Password.value)
  .then(() => {
    console.log('successfully logged in')
    router.push('/admin')
  })
  .catch((error) => {
    switch(error.code){
      case 'auth/invalid-email':
        errorMsg.value =  'Invalid email'
        break
      case 'auth/user-not-found':
        errorMsg.value =  'No account with that email was found'
        break  
      case 'auth/wrong-password':
        errorMsg.value =  'Incorrect password'
        break  
      default:
        errorMsg.value = 'Email or password was incorrect'
        break   

    }
  })
}

</script>
