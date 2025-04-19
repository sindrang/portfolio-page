import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EngineeringView from '../views/EngineeringView.vue'
import MixologyView from '../views/MixologyView.vue'
import SewingView from '../views/SewingView.vue'
import VoiceView from '../views/VoiceView.vue'
import WritingView from '../views/WritingView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/engineering',
      name: 'engineering',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EngineeringView.vue'),
    },
    {
      path: '/writing',
      name: 'writing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WritingView.vue'),
    },
    {
      path: '/mixology',
      name: 'mixology',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MixologyView.vue'),
    },
    {
      path: '/sewing',
      name: 'sewing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SewingView.vue'),
    },
    {
      path: '/voice',
      name: 'voice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VoiceView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Not Found',
      component: NotFoundView,
    },
  ],
})

export default router
