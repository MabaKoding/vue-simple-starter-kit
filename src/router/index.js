import { createRouter, createWebHistory } from 'vue-router'
import InputView from '../views/InputView.vue'
import ButtonView from '../views/ButtonView.vue'
import SelectView from '../views/SelectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'input',
      component: InputView,
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonView,
    },
    {
      path: '/select',
      name: 'select',
      component: SelectView,
    },
  ],
})

export default router
