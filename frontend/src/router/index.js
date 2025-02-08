import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lets-talk',
      name: 'lets-talk',
      component: () => import('../views/ContactForm.vue'),
    },
  ],
})

export default router
