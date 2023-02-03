<template>
  <nav
    class="nav flex flex-wrap items-center justify-between px-4 bg-amber-500 text-white"
  >
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
      class="h-10 w-10 mx-2 " fill="current">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M512 32H160c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64H512c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 320c0 8.822-7.178 16-16 16h-16l-109.3-160.9C383.7 170.7 378.7 168 373.3 168c-5.352 0-10.35 2.672-13.31 7.125l-62.74 94.11L274.9 238.6C271.9 234.4 267.1 232 262 232c-5.109 0-9.914 2.441-12.93 6.574L176 336H160c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16H512c8.822 0 16 7.178 16 16V320zM224 112c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.68 0 32-14.33 32-32S241.7 112 224 112zM456 480H120C53.83 480 0 426.2 0 360v-240C0 106.8 10.75 96 24 96S48 106.8 48 120v240c0 39.7 32.3 72 72 72h336c13.25 0 24 10.75 24 24S469.3 480 456 480z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight"
        ><router-link to="/">View Albums App</router-link></span
      >
    </div>

    <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
    <label
      class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
      for="menu-btn"
    >
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul class="menu">
      <span
        class="md:border-none flex list-reset m-0 md:w-auto"
        v-if="isLoggedIn"
      >
        <li
          class="mx-4 md:border-none py-2 flex justify-end list-reset m-0 w-full md:w-auto"
        >
          <router-link to="/admin">Dashboard</router-link>
        </li>
        <li
          class="mx-4 md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
        >
          <button
            class="rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce"
            @click="signOut"
          >
            Logout
          </button>
        </li>
      </span>
      <span
        class="md:border-none flex justify-end list-reset m-0 w-full md:w-auto"
        v-else
      >
        <li
          class="mx-4 md:border-none rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce"
        >
          <router-link to="/login">sign in</router-link>
        </li>
        <li
          class="md:border-none rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce"
        >
          <router-link to="/signup">sign up</router-link>
        </li>
      </span>
    </ul>
  </nav>
  <router-view />
  <footer class="py-4 bg-amber-500 text-white">
    <p class="text-center">@2023</p>
  </footer>
</template>

<script setup>
import { getAuth } from "firebase/auth";
import { onBeforeMount } from "@vue/runtime-core";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isLoggedIn = ref(true);
const signOut = () => {
  getAuth().signOut();
  router.push("/");
};

onBeforeMount(() => {
  getAuth().onAuthStateChanged((user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<style>
nav {
  padding: 24px;
}
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: 0.125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    content: "";
    background: #3d4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>
