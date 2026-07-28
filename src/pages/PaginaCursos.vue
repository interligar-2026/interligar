<template>
  <div class="page-container">
    <Navbar />
    <CursosHero />
    <CursosLista />
    <CursosPagos />
    <TheFooter />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import CursosHero from '@/components/CursosHero.vue';
import CursosLista from '@/components/CursosLista.vue';
import CursosPagos from '@/components/CursosPagos.vue';
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
