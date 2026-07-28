<template>
  <div class="page-container">
    <Navbar />
    <SobreNosHero />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import SobreNosHero from '@/components/SobreNosHero.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>

