import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/PaginaHome.vue'
import Simulados from '../pages/PaginaSimulados.vue'
import Cursos from '../pages/PaginaCursos.vue'
import AuthView from '@/pages/AuthView.vue'
import SobreNos from '../pages/PaginaSobreNos.vue'

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
    {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: AuthView
  },
  {
    path: '/sobre-nos',
    name: 'sobre',
    component: SobreNos
  },

  ],
})

export default router
