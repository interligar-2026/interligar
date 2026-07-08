import { createRouter, createWebHistory } from 'vue-router'
// Importamos a sua página Home (repare que no seu VS Code a pasta chama 'pages' e não 'views')
import Home from '../pages/PaginaHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
})

export default router
