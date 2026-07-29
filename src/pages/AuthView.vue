<template>
  <div class="auth-page-container">
    <LoginCard v-if="isLogin" />
    <CadastroCard v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LoginCard from '@/components/LoginCard.vue'
import CadastroCard from '@/components/CadastroCard.vue'

const route = useRoute()
const isLogin = computed(() => route.path === '/login')
</script>

<style scoped>
.auth-page-container {
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/fundo-auth.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: 'M PLUS 1', sans-serif;
  box-sizing: border-box;
}

@media (max-width: 992px) {
  .auth-page-container {
    padding: 20px;
  }
}
</style>
