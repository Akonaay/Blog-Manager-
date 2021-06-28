<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Navbar />
  <div class="container mt-3">
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: { Navbar },
};
</script>

<style></style>
