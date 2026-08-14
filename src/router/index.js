import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import Impressum from '@/pages/Impressum.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/impressum', component: Impressum },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
