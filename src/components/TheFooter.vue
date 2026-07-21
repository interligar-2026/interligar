<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-brand-col">
        <img src="../assets/MerlinFooter.png" alt="Mascote Merlin" class="footer-mascot" />
        <p class="footer-slogan">
          A plataforma que te prepara <br />
          para o futuro
        </p>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-links-col">
        <h4 class="footer-title">Navegação</h4>
        <div class="links-subgrid">
          <ul class="links-list">
            <li><a href="#">Início</a></li>
            <li><a href="#">Estudos</a></li>
          </ul>
          <ul class="links-list">
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Orientação</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-help-col">
        <h4 class="footer-title">Ajuda</h4>
        <div class="links-subgrid">
          <ul class="links-list">
            <li><a href="#">Dúvidas frequentes</a></li>
            <li><a href="#">Fale conosco</a></li>
          </ul>
          <ul class="links-list">
            <li><a href="#">Termos de uso</a></li>
            <li><a href="#">Política de privacidade</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-social-col">
        <h4 class="footer-title">Siga o Interligar</h4>
        <div class="social-icons-wrapper">
          <a href="#" aria-label="Instagram" class="social-link">
            <Instagram class="social-icon" />
          </a>
          <a href="#" aria-label="YouTube" class="social-link">
            <Youtube class="social-icon" />
          </a>
        </div>
      </div>
    </div>
          <p class="copyright-text">@2026 InterLigar. Todos os direitos reservados</p>
  </footer>
</template>

<script setup>
import { Instagram, Youtube } from 'lucide-vue-next'
</script>

<style scoped>
.footer-container {
  max-width: 1400px;
  width: 96%;
  margin: 50px auto 30px auto;
  padding: 30px 40px;
  background: linear-gradient(180deg, #1656ad 0%, #10428a 100%);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  font-family: 'M PLUS 1', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.footer-brand-col {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1.2;
}

.footer-mascot {
  width: 70px;
  height: auto;
}

.footer-slogan {
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.footer-divider {
  width: 1px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.footer-title {
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.footer-links-col,
.footer-help-col {
  display: flex;
  flex-direction: column;
}

.footer-links-col {
  flex: 1;
}

.footer-help-col {
  flex: 1.8;
}

.links-subgrid {
  display: flex;
  gap: 24px;
}

.links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.links-list a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.links-list a:hover {
  color: #ffffff;
}

.copyright-text {
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;
  margin-top: 40px;
}

.footer-social-col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.8;
}

.social-icons-wrapper {
  display: flex;
  gap: 12px;
}

.social-link {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.social-link:hover {
  transform: translateY(-2px);
}

.social-icon {
  width: 26px;
  height: 26px;
  stroke-width: 2px;
}

@media (max-width: 992px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
  }

  .footer-brand-col {
    flex-direction: column;
  }

  .footer-divider {
    width: 80%;
    height: 1px;
  }

  .footer-links-col,
  .footer-help-col,
  .footer-social-col {
    align-items: center;
  }

  .links-subgrid {
    gap: 40px;
  }
}
</style>
