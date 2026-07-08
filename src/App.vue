<template>
  <div>
    <!-- Essa tag é a janela mágica! É aqui que a Home.vue (ou qualquer outra página) vai aparecer -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
/* Aqui você pode colocar estilos globais para todo o site, se quiser */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
