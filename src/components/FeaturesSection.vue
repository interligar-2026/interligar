<template>
  <section class="explore-section">
    <div class="explore-header">
      <h2 class="explore-header-title">Explore o que o InterLigar oferece para você</h2>
    </div>

    <div class="features-container">

      <div class="feature-banner-card">
        <div class="feature-image-wrapper">
          <img src="../assets/MerlinSimulados.png" alt="Merlin fazendo simulados" class="feature-img" />
        </div>

        <div class="feature-info-content">
          <div class="feature-title-block">
            <FileSpreadsheet class="feature-lucide-icon" />
            <h4 class="feature-card-title">Simulados Universitários</h4>
          </div>
          <p class="feature-card-text">
            Prepare-se para os principais vestibulares e concursos com simulados inteligentes.
          </p>
          <button class="btn-explore">
            Explorar simulados <ChevronRight class="btn-arrow-icon" />
          </button>
        </div>
      </div>

      <div class="feature-banner-card">
        <div class="feature-image-wrapper">
          <img src="../assets/MerlinEstudo.png" alt="Merlin fazendo cursos na poltrona" class="feature-img" />
        </div>

        <div class="feature-info-content">
          <div class="feature-title-block">
            <GraduationCap class="feature-lucide-icon" />
            <h4 class="feature-card-title">Cursos de Habilidades</h4>
          </div>
          <p class="feature-card-text">
            Desenvolva habilidades interpessoais essenciais para a vida e para o trabalho.
          </p>
          <button class="btn-explore">
            Explorar cursos <ChevronRight class="btn-arrow-icon" />
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { FileSpreadsheet, GraduationCap, ChevronRight } from 'lucide-vue-next'
</script>

<style scoped>
.explore-section {
  max-width: 1400px;
  width: 96%;
  margin: 60px auto;
  padding: 20px;
  font-family: 'M PLUS 1', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.explore-header {
  background-color: rgba(11, 64, 134, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 12px 50px;
  border-radius: 50px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
}

.explore-header-title {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  text-align: center;
}

.features-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 45px;
}

.feature-banner-card {
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #1656ad 0%, #10428a 100%);
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 32px;
  padding: 24px;
  gap: 30px;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.35),
    0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-banner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
}

.feature-banner-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3%3E");
  background-repeat: repeat;
  background-size: 80px 80px;
  filter: contrast(180%) brightness(140%) saturate(0%);
  pointer-events: none;
  z-index: 0;
  border-radius: inherit;
}

.feature-image-wrapper {
  flex: 1.1;
  max-width: 480px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.feature-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.feature-info-content {
  flex: 0.9;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  z-index: 1;
}

.feature-title-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.feature-lucide-icon {
  width: 40px;
  height: 40px;
  color: #ffffff;
  stroke-width: 2px;
}

.feature-card-title {
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.feature-card-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  max-width: 400px;
}

.btn-explore {
  background-color: rgba(11, 41, 88, 0.4);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 28px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s, transform 0.2s;
}

.btn-explore:hover {
  background-color: rgba(11, 41, 88, 0.7);
  transform: translateX(3px);
}

.btn-arrow-icon {
  width: 16px;
  height: 16px;
  stroke-width: 3px;
}

@media (max-width: 992px) {
  .feature-banner-card {
    flex-direction: column;
    padding: 18px;
    gap: 20px;
  }

  .feature-image-wrapper {
    max-width: 100%;
    width: 100%;
  }

  .feature-info-content {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .feature-title-block {
    flex-direction: column;
    gap: 8px;
  }

  .feature-card-title {
    font-size: 24px;
  }

  .btn-explore {
    width: 100%;
    justify-content: center;
  }
}
</style>
