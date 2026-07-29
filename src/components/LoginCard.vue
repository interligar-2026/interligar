<template>
  <div class="auth-card">
    <h1 class="card-title">Login</h1>

    <form @submit.prevent="handleLogin" class="auth-form">
      <div class="input-group">
        <input
          v-model="email"
          type="email"
          placeholder="E-mail"
          required
        />
        <Mail class="input-icon" />
      </div>
      <div class="input-group">
        <input
          v-model="senha"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Senha"
          required
        />
        <Eye
          class="input-icon clickable"
          @click="showPassword = !showPassword"
        />
      </div>
      <div class="form-actions">
        <router-link to="/cadastro" class="switch-link">
          Não tem uma conta?
        </router-link>

        <button type="submit" class="btn-primary">
          <span>Entrar</span>
          <ChevronRight class="btn-icon" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, Eye, ChevronRight } from 'lucide-vue-next'

const email = ref('')
const senha = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login:', { email: email.value, senha: senha.value })
}
</script>

<style scoped>
.auth-card {
  background-color: #1d6bc9;
  border: 2px solid #0f3d7a;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  padding: 40px 35px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.card-title {
  color: #ffffff;
  font-family: 'serif', Georgia, Times, 'Times New Roman';
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 35px 0;
  text-align: center;
}

.auth-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  position: relative;
  width: 100%;
}

.input-group input {
  width: 100%;
  background-color: #d9d9d9;
  border: 2px solid #1a1a1a;
  border-radius: 8px;
  padding: 14px 45px 14px 16px;
  font-family: 'M PLUS 1', monospace, sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  box-sizing: border-box;
  outline: none;
}

.input-group input::placeholder {
  color: #333333;
}

.input-icon {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  stroke: #1a1a1a;
  stroke-width: 2px;
}

.input-icon.clickable {
  cursor: pointer;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 100%;
}

.switch-link {
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
}

.switch-link:hover {
  text-decoration: underline;
}

.btn-primary {
  background-color: #0088ff;
  color: #ffffff;
  border: none;
  border-radius: 25px;
  padding: 10px 24px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-icon {
  width: 18px;
  height: 18px;
  stroke-width: 3px;
}
</style>
