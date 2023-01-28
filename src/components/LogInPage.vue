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
          @submit.prevent= "saveUser"
        >
          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input
              v-model="Email"
              type="email"
              id="email"
              placeholder="your@email.com"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              v-model="Password"
              type="password"
              id="password"
              placeholder="Password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <input
            on-click="saveUser"
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
// import { ref } from 'vue';

// const Email = ref('')
// const Password = ref('')
// const user = ref([])

// const saveUser = () => {user.value.push({UserId : user.value.length + 1, email : Email.value, password : Password.value}),console.log(user)}
// console.log(user.value)
</script>
