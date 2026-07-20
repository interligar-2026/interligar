<template>
  <section class="steps-section">
    <div class="steps-header">
      <h2 class="steps-title">Como o interligar funciona?</h2>
    </div>

    <div class="cards-container">
      <div class="step-card">
        <div class="card-icon">
          <CalendarDays class="lucide-icon" />
        </div>
        <h3 class="card-title">1. Estude</h3>
        <p class="card-text">
          Aulas e materiais feitos para te ajudar a aprender de verdade
        </p>
      </div>

      <div class="connector-line"></div>

      <div class="step-card">
        <div class="card-icon">
          <Trophy class="lucide-icon" />
        </div>
        <h3 class="card-title">2. Pratique</h3>
        <p class="card-text">
          Exercícios e simulados para testar seus conhecimentos.
        </p>
      </div>

      <div class="connector-line"></div>

      <div class="step-card">
        <div class="card-icon">
          <Pencil class="lucide-icon" />
        </div>
        <h3 class="card-title">3. Planeje</h3>
        <p class="card-text">
          Organize seus estudos e acompanhe seu progresso.
        </p>
      </div>

      <div class="connector-line"></div>

      <div class="step-card">
        <div class="card-icon">
          <Heart class="lucide-icon" />
        </div>
        <h3 class="card-title">4. Conquiste</h3>
        <p class="card-text">
          Conquiste sua vaga e transforme seu futuro com a educação.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { CalendarDays, Trophy, Pencil, Heart } from 'lucide-vue-next'
</script>

<style scoped>
.steps-section {
  max-width: 1400px;
  width: 96%;
  margin: 80px auto;
  padding: 20px;
  font-family: 'M PLUS 1', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.steps-header {
  background-color: rgba(11, 64, 134, 0.7);
  border: 2px solid rgba(255, 255, 255, 0.15);
  padding: 15px 70px;
  border-radius: 60px;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.3);
}

.steps-title {
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  margin: 0;
  text-align: center;
}

.cards-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 15px;
  position: relative;
}

.step-card {
  flex: 1;
  background: linear-gradient(180deg, #1656ad 0%, #10428a 100%);
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  padding: 40px 25px;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.2),
    inset 0 2px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.125);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3%3E");
  background-repeat: repeat;
  background-size: 80px 80px;
  filter: contrast(180%) brightness(140%) saturate(0%);
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
}

.step-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.5),
    0 10px 20px rgba(0, 0, 0, 0.3);
}

.card-icon {
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.lucide-icon {
  width: 42px;
  height: 42px;
  color: #1150a2;
  stroke-width: 2.5px;
  display: inline-block;
}

.card-title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 15px 0;
  position: relative;
  z-index: 1;
}

.card-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  position: relative;
  z-index: 1;
}

.connector-line {
  width: 50px;
  height: 30px;
  flex-shrink: 0;
  border-bottom: 4px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transform: translateY(-25px);
}

@media (max-width: 992px) {
  .steps-section {
    margin: 60px auto;
    gap: 40px;
  }

  .steps-header {
    padding: 12px 50px;
  }

  .steps-title {
    font-size: 22px;
  }

  .cards-container {
    flex-direction: column;
    gap: 35px;
  }

  .step-card {
    width: 100%;
    max-width: 380px;
    min-height: auto;
    padding: 35px 25px;
  }

  .connector-line {
    display: none;
  }
}
</style>
