<template>
  <div class="page-container">
    <Navbar />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
