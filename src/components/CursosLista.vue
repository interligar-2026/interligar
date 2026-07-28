<template>
  <section class="cursos-lista-container">
    <div class="pill-header">
      <h2>Cursos gratuitos</h2>
    </div>
    <div class="cursos-box">
      <div class="curso-item">
        <div class="curso-icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="10" width="48" height="34" rx="4" fill="#60A5FA" stroke="#0F172A" stroke-width="3"/>
            <path d="M22 22L28 28L22 34" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
            <path d="M32 34H42" stroke="#0F172A" stroke-width="3" stroke-linecap="round"/>
            <path d="M24 44L20 54H44L40 44" stroke="#0F172A" stroke-width="3"/>
            <rect x="16" y="54" width="32" height="4" rx="2" fill="#0F172A"/>
          </svg>
        </div>
        <div class="curso-info">
          <h3 class="curso-title">
            Nosso curso Inter, abrange as matérias de exatas: Física, Matemática e Química
          </h3>
          <p class="curso-desc">
            Aulas gravadas, professores capacitados, exercícios e simulados disponibilizados em nossa plataforma de estudos.
          </p>
        </div>
      </div>
      <div class="curso-item reverse">
        <div class="curso-info">
          <h3 class="curso-title">
            Nosso curso Ligar, abrange as matérias de humanas e biológicas: Língua Portuguesa, Ciências Humanas, História, Sociologia, Filosofia, Biologia, Artes e Inglês.
          </h3>
          <p class="curso-desc">
            Aulas gravadas, professores capacitados e e-book gratuito para te auxiliar nos estudos.
          </p>
        </div>
        <div class="curso-icon">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="8" width="36" height="48" rx="4" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>
            <path d="M18 18H38M18 26H38M18 34H30" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
            <circle cx="44" cy="42" r="10" fill="#FACC15" stroke="#0F172A" stroke-width="3"/>
            <path d="M41 52H47" stroke="#0F172A" stroke-width="3"/>
          </svg>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.cursos-lista-container {
  width: 96%;
  max-width: 1400px;
  margin: 0 auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'M PLUS 1', sans-serif;
  box-sizing: border-box;
}

.pill-header {
  background-color: #0a366f;
  border: 1px solid #0b2958;
  border-radius: 50px;
  padding: 10px 48px;
  margin-bottom: -22px;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pill-header h2 {
  color: #ffffff;
  font-size: 32px;
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.5px;
}

.cursos-box {
  background-color: #1a74e5;
  border: 1px solid #0b2958;
  border-radius: 24px;
  padding: 50px 40px 40px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.curso-item {
  display: flex;
  align-items: center;
  gap: 35px;
}

.curso-item.reverse {
  justify-content: space-between;
}

.curso-icon {
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.curso-icon svg {
  width: 100%;
  height: 100%;
}

.curso-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.curso-title {
  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  line-height: 1.35;
}

.curso-desc {
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;
}

@media (max-width: 992px) {
  .pill-header {
    padding: 8px 32px;
    margin-bottom: -18px;
  }

  .pill-header h2 {
    font-size: 24px;
  }

  .cursos-box {
    padding: 40px 20px 30px 20px;
    gap: 35px;
  }

  .curso-item, .curso-item.reverse {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }

  .curso-icon {
    width: 80px;
    height: 80px;
  }

  .curso-title {
    font-size: 18px;
  }

  .curso-desc {
    font-size: 14px;
  }
}
</style>
