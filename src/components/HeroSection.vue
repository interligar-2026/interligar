<template>
  <section class="hero-container">
    <div class="hero-content">

      <div class="hero-left">
        <h1 class="hero-title">
          Seu futuro <br />
          começa <span class="highlight-blue">aqui!</span>
        </h1>

        <p class="hero-subtitle">
          A plataforma gratuita que te prepara para o ensino superior e te ajuda a conquistar seus sonhos.
        </p>

        <div class="hero-buttons">
          <button class="btn-primary">Começar agora</button>
          <button class="btn-secondary">
            <Play class="btn-icon-play" /> Conhecer a plataforma
          </button>
        </div>
      </div>

      <div class="hero-right">
        <div class="speech-bubble">
          Foco hoje, conquista amanhã!
          <Rocket class="bubble-icon-rocket" />
        </div>
        <img src="../assets/Merlin.png" alt="Mascote Coruja" class="hero-mascot" />
      </div>

    </div>

    <div class="hero-features">
      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <BookOpen class="feature-icon" />
        </div>
        <p>Conteúdo de qualidade</p>
      </div>

      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <Target class="feature-icon" />
        </div>
        <p>Simulados e exercícios para praticar</p>
      </div>

      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <GraduationCap class="feature-icon" />
        </div>
        <p>Orientação para o seu futuro</p>
      </div>

      <div class="feature-item">
        <div class="feature-icon-wrapper">
          <Trophy class="feature-icon" />
        </div>
        <p>Tudo gratuito e acessível</p>
      </div>
    </div>

  </section>
</template>

<script setup>
import {
  Play,
  Rocket,
  BookOpen,
  Target,
  GraduationCap,
  Trophy
} from 'lucide-vue-next'
</script>

<style scoped>
.hero-container {
  max-width: 1400px;
  width: 96%;
  margin: 0 auto;
  padding: 60px 30px 40px 30px;
  background: radial-gradient(circle at 80% 50%, #155bb5 0%, #ffffff 70%);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  font-family: 'M PLUS 1', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
}

.hero-left {
  flex: 1.2;
  max-width: 600px;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  color: #0b2958;
  line-height: 1.1;
  margin: 0 0 20px 0;
}

.highlight-blue {
  color: #1862be;
}

.hero-subtitle {
  font-size: 18px;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 35px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.btn-primary {
  background-color: #1150a2;
  color: white;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(17, 80, 162, 0.3);
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  background: linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%);
  color: #0b2958;
  border: 2px solid #cbd5e1;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.btn-secondary:hover {
  transform: translateY(-2px);
}

.hero-right {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.hero-mascot {
  width: 100%;
  max-width: 580px;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  display: block;
}

.speech-bubble {
  position: absolute;
  top: -40px;
  left: 62%;
  transform: translateX(-50%);
  background-color: #f7fafc;
  color: #2d3748;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 5;
  white-space: nowrap;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #f7fafc;
}

.hero-features {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 30px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  gap: 8px;
}

.btn-icon-play {
  width: 14px;
  height: 14px;
  fill: #0b2958;
  stroke: #0b2958;
  display: inline-block;
}

.bubble-icon-rocket {
  width: 18px;
  height: 18px;
  stroke: #ff9f43;
}

.feature-icon-wrapper {
  background-color: #ffffff;
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  width: 36px;
  height: 36px;
  stroke: #1150a2;
  stroke-width: 2px;
}

.feature-item p {
  font-size: 14px;
  font-weight: 600;
  color: #0b2958;
  margin: 0;
}

@media (max-width: 992px) {

  .hero-container {
    padding: 70px 20px;
  }

  .hero-content {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    gap: 60px;
  }

  .hero-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-title {
    font-size: 38px;
  }

  .hero-subtitle {
    font-size: 16px;
    margin-bottom: 25px;
  }

  .hero-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .hero-right {
    width: 100%;
    justify-content: center;
    margin: 0 auto;
  }

  .hero-mascot {
    width: 100%;
    height: auto;
    display: block;
    margin-left: -130px;
  }

  .speech-bubble {
    position: absolute;
    top: -45px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    z-index: 2;
  }

  .hero-features {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding-top: 40px;
  }

  .feature-icon-wrapper {
    margin-bottom: 12px;
  }
}
</style>
