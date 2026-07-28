<template>
  <div class="page-container">
    <Navbar />
    <CursosHero />
    <CursosLista />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import CursosHero from '@/components/CursosHero.vue';
import CursosLista from '@/components/CursosLista.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
