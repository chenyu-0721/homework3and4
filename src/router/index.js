import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SeriesFrames from '../views/SeriesFrames.vue'
import storeView from '@/views/storeView.vue'
import storePage from '@/components/storePosition/storePage.vue'
import questionView from '@/views/questionView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogInfoView from '@/views/BlogInfoView.vue'
const router = createRouter({
  history: createWebHistory('/homework3and4/'),
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
    },
    {
      path: '/store',
      name: 'storeView',
      component: storeView
    },
    {
      path: '/storepage',
      name: 'storepage',
      component: storePage
    },
    {
      path: '/question',
      name: 'question',
      component: questionView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blogInfoView',
      name: 'blogInfoView',
      component: BlogInfoView
    }
  ]
})

export default router
