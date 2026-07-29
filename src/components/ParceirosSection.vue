<template>
  <section class="parceiros-container">
    <div class="parceiros-box">
      <h2 class="section-title">Parceiros</h2>
      <div class="parceiros-grid">
        <div class="parceiro-card">
          <div class="logo-wrapper">
            <img src="../assets/ConquerLogo.png" alt="Logo Escola Conquer" class="partner-logo" />
          </div>
          <div class="info-wrapper">
            <p class="description">
              Possuimos um curso de oratória em parceria com a @EscolaConquer
            </p>
            <a href="https://escolaconquer.pratudo.com" target="_blank" class="btn-site">
              Ver site <span class="arrows">»</span>
            </a>
          </div>
        </div>
        <div class="parceiro-card">
          <div class="logo-wrapper">
            <img src="../assets/TrilhandoLogo.png" alt="Logo Trilhando" class="partner-logo" />
          </div>
          <div class="info-wrapper">
            <span class="partner-subtitle">Trilhando</span>
            <p class="description">
              Descubra como trilhar sua carreira, desenvolver habilidades e encontrar oportunidades para transformar seu potencial em realização
            </p>
            <a href="#" target="_blank" class="btn-site">
              Ver site <span class="arrows">»</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.parceiros-container {
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  font-family: 'M PLUS 1', sans-serif;
}

.parceiros-box {
  background-color: #1a74e5;
  border: 1px solid #0b2958;
  border-radius: 20px;
  padding: 30px 40px 40px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin: 0 0 35px 0;
  text-align: center;
}

.parceiros-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
}

.parceiro-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.logo-wrapper {
  width: 200px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 280px;
}

.partner-subtitle {
  color: #000000;
  font-size: 13px;
  font-weight: 800;
}

.description {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
}

.btn-site {
  background-color: #0a366f;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 22px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, background-color 0.2s;
  margin-top: 6px;
}

.btn-site:hover {
  background-color: #072852;
  transform: translateY(-2px);
}

.arrows {
  font-size: 15px;
}

@media (max-width: 992px) {
  .parceiros-box {
    padding: 25px 20px;
  }

  .parceiros-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .parceiro-card {
    flex-direction: column;
    text-align: center;
  }

  .logo-wrapper {
    width: 100%;
    max-width: 220px;
  }

  .info-wrapper {
    align-items: center;
    max-width: 100%;
  }

  .description {
    text-align: center;
  }
}
</style>
