import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/PaginaHome.vue'
import Simulados from '../pages/PaginaSimulados.vue'
import Cursos from '../pages/PaginaCursos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/simulados',
      name: 'simulados',
      component: Simulados,
    },
    {
      path: '/cursos',
      name: 'cursos',
      component: Cursos,
    },
  ],
})

export default router
