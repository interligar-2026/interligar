<template>
  <div class="page-container">
    <Navbar />
    <HeroSection />
    <HowITWorks />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import HowITWorks from '../components/HowItWorks.vue'
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
