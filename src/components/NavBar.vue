<template>
  <nav class="navbar">
    <div class="logo">MeuSite</div>

    <ul class="nav-links" :class="{ 'active': isMenuOpen }">
      <li><a href="#">Início</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Serviços</a></li>
      <li><a href="#">Contato</a></li>
    </ul>

    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Criamos a caixinha que diz se o menu está aberto ou fechado
const isMenuOpen = ref(false)

// Função que inverte o valor (se tá aberto fecha, se tá fechado abre)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* O seu CSS continua EXATAMENTE igual, só adicionamos o 'scoped' na tag style */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  padding: 15px 30px;
  color: white;
}
.logo {
  font-size: 24px;
  font-weight: bold;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}
.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #1a1a1a;
    padding: 20px;
  }
  .nav-links.active {
    display: flex;
  }
  .menu-toggle {
    display: block;
  }
}
</style>
