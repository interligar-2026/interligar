<template>
  <div>
    <NavBar />

    <main class="conteudo-home">
      <h1>Bem-vindo à Página Inicial!</h1>
      <p>Aqui embaixo fica o restante do conteúdo do seu site.</p>
    </main>
  </div>
</template>

<script setup>
// 1. Importamos o componente NavBar da pasta de componentes
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
.conteudo-home {
  padding: 20px;
  font-family: sans-serif;
}
</style>
