<template>
  <nav class="bg-amber-500 text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Sign In</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/photo">Photo</router-link> |
    <router-link to="/albums">Albums</router-link> 
  </nav>
  <router-view/>
</template>

<style>

nav {
  padding: 30px;
}

</style>
