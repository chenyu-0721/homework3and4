import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeriesFrames from '../views/SeriesFrames.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/seriesframes',
      name: 'series',
      component: SeriesFrames
    }
  ]
})

export default router
