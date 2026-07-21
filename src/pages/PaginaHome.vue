<template>
  <div class="page-container">
    <Navbar />
    <HeroSection />
    <HowITWorks />
    <FeaturesSection />
    <TrustBar />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import HowITWorks from '../components/HowItWorks.vue'
import FeaturesSection from '../components/FeaturesSection.vue';
import TrustBar from '../components/TrustBar.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
