<template>
  <div class="trust-bar-container">
    <div class="benefit-item">
      <ShieldCheck class="benefit-icon" />
      <span class="benefit-text">Conteúdo confiável</span>
    </div>

    <div class="separator-line"></div>

    <div class="benefit-item">
      <Target class="benefit-icon" />
      <span class="benefit-text">Foco no seu objetivo</span>
    </div>

    <div class="separator-line"></div>

    <div class="benefit-item">
      <BrainCircuit class="benefit-icon" />
      <span class="benefit-text">Aprendizado personalizado</span>
    </div>

    <div class="separator-line"></div>

    <div class="benefit-item">
      <HeartPulse class="benefit-icon" />
      <span class="benefit-text">Comunidade que apoia</span>
    </div>

    <div class="separator-line"></div>

    <div class="benefit-item">
      <Lock class="benefit-icon" />
      <span class="benefit-text">Seguro e acessível</span>
    </div>

  </div>
</template>

<script setup>
import { ShieldCheck, Target, BrainCircuit, HeartPulse, Lock } from 'lucide-vue-next'
</script>

<style scoped>
.trust-bar-container {
  max-width: 1200px;
  width: 90%;
  margin: 40px auto;
  background-color: #1150a2;
  border-radius: 20px;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'M PLUS 1', sans-serif;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.benefit-icon {
  width: 32px;
  height: 32px;
  color: #ffffff;
  stroke-width: 1.5px;
}

.benefit-text {
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  max-width: 140px;
}

.separator-line {
  width: 1px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 992px) {
  .trust-bar-container {
    width: 95%;
    padding: 15px;
    gap: 10px;
  }

  .benefit-item {
    gap: 8px;
  }

  .benefit-icon {
    width: 28px;
    height: 28px;
  }

  .benefit-text {
    font-size: 12px;
    max-width: 100px;
  }

  .separator-line {
    height: 30px;
  }
}
</style>
