<template>
  <nav class="nav flex flex-wrap items-center justify-between px-4 bg-amber-500 text-white">
    <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
      <svg
        class="h-8 mr-2 w-8"
        xmlns="http://www.w3.org/2000/svg"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        clip-rule="evenodd"
        viewBox="0 0 716 895"
      >
        <path
          d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"
        ></path>
        <path
          class="text-black fill-current"
          d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"
        ></path>
        <path
          d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"
        ></path>
      </svg>
      <span class="font-semibold text-xl tracking-tight"><router-link to="/">View Albums App</router-link></span>
    </div>

    <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
    <label
      class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
      for="menu-btn"
    >
      <span class="navicon bg-grey-darkest flex items-center relative"></span>
    </label>

    <ul class="menu"  
    >
      <span class="md:border-none flex  list-reset m-0  md:w-auto"  v-if="isLoggedIn">
        <li class="mx-4 md:border-none py-2  flex  justify-end list-reset m-0 w-full md:w-auto">
          <router-link to="/admin">Dashboard</router-link>
        </li>
        <li class="mx-4 md:border-none flex  justify-end list-reset m-0 w-full md:w-auto">
          <button class="rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce" @click="signOut">Logout</button>
        </li>
      </span>
      <span class="md:border-none flex justify-end list-reset m-0 w-full md:w-auto" v-else>
        <li class="mx-4 md:border-none rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce">
          <router-link to="/login">sign in</router-link>
        </li>
        <li class="md:border-none rounded-lg bg-black px-4 py-2 text-amber-400 hover:animate-bounce">
          <router-link to="/signup">sign up</router-link>
        </li>
      </span>
    </ul>
  </nav>
  <router-view />
  <footer class="py-4 bg-black text-white">
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
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #3D4852;
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
