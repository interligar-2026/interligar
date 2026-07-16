<template>
  <nav class="navbar">

      <img src="../assets/logo.png" alt="Logo Interliga" class="logo-img" />


    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li><a href="#">Início</a></li>
      <li><a href="#">Simulados</a></li>
      <li><a href="#">Cursos</a></li>
      <li><a href="#">Sobre nós</a></li>
    </ul>

    <div class="nav-actions" :class="{ active: isMenuOpen }">
      <a href="#" class="btn-login">Entrar</a>
    </div>

    <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
      <X v-if="isMenuOpen" class="icon-style" />
      <Menu v-else class="icon-style" />
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, #1862be 0%, #1150a2 100%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px 24px;
  border-radius: 18px;
  color: white;
  font-family: 'M PLUS 1', sans-serif;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  width: 96%;
  max-width: 1400px;
  margin: 20px auto;
}


.logo-img {
  height: 48px;
  border-radius: 10px;
  object-fit: cover;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: opacity 0.2s ease;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-actions {
  display: flex;
  align-items: center;
}

.btn-login {
  background-color: rgba(11, 41, 88, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  text-decoration: none;
  padding: 8px 38px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
  transition: background-color 0.2s ease;
}

.btn-login:hover {
  background-color: rgba(11, 41, 88, 0.8);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}

.icon-style {
  width: 32px;
  height: 32px;
  stroke: white;
  display: block;
}

@media (max-width: 768px) {
  .navbar {
    border-radius: 12px;
    width: 92%;
    margin: 10px auto;
    position: relative;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #1150a2 0%, #0c3c7c 100%);
    border-radius: 0 0 16px 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-top: none;
    padding: 30px 20px;
    gap: 24px;
    z-index: 100;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .nav-links.active {
    display: flex;
  }

  .nav-actions {
    display: none;
  }

  .nav-links.active::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.15);
    margin: 10px 0;
  }

  .nav-links.active ~ .nav-actions {
    display: block;
    position: absolute;
    top: calc(65px + 240px); /* Posiciona ele perfeitamente grudado embaixo do menu */
    left: 0;
    width: 100%;
    background-color: #0c3c7c;
    border-radius: 0 0 16px 16px;
    padding: 0 20px 25px 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-top: none;
    z-index: 100;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .nav-links.active ~ .nav-actions .btn-login {
    display: block;
    width: 100%;
    text-align: center;
    background-color: rgba(11, 41, 88, 0.8);
    padding: 12px 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
