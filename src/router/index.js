import { createRouter, createWebHistory } from 'vue-router'
import InputView from '../views/InputView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'input',
      component: InputView,
    }
  ],
})

export default router
