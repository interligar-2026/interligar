<template>
  <div class="page-container">
    <Navbar />
    <HeroSection />
    <HowITWorks />
    <FeaturesSection />
    <TrustBar />
    <TheFooter />
  </div>
</template>

<script setup>
import Navbar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import HowITWorks from '../components/HowItWorks.vue'
import FeaturesSection from '../components/FeaturesSection.vue';
import TrustBar from '../components/TrustBar.vue';
import TheFooter from '../components/TheFooter.vue';
</script>

<style>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 50px;
}
</style>
