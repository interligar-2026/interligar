<template>
  <div class="page-container">
    <Navbar />
    <SimuladosHero />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import SimuladosHero from '../components/SimuladosHero.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
