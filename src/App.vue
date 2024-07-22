<script setup>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Nav />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
.app {
  font-family: 'Noto Sans TC', 'Roboto', sans-serif;
}
</style>
