<template>
  <div class="page-container">
    <Navbar />
    <SobreNosHero />
    <SobreNosTexto />
    <InclusaoHero />
    <InclusaoTexto />
    <InclusaoCards />
    <ParceirosSection />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import SobreNosHero from '@/components/SobreNosHero.vue';
import SobreNosTexto from '@/components/SobreNosTexto.vue';
import InclusaoHero from '@/components/InclusaoHero.vue';
import InclusaoTexto from '@/components/InclusaoTexto.vue';
import InclusaoCards from '@/components/InclusaoCards.vue';
import ParceirosSection from '@/components/ParceirosSection.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>

