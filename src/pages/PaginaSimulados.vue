<template>
  <div class="page-container">
    <Navbar />
    <SimuladosHero />
    <SimuladosCards />
    <TheFooter />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import SimuladosHero from '../components/SimuladosHero.vue';
import SimuladosCards from '@/components/SimuladosCards.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
