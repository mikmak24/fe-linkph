import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/visit',
      name: 'visit',
      component: () => import('../views/VisitView.vue'),
    },
    {
      path: '/grow',
      name: 'grow',
      component: () => import('../views/GrowView.vue'),
    },
    {
      path: '/ministries',
      name: 'ministries',
      component: () => import('../views/MinistriesView.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/give',
      name: 'give',
      component: () => import('../views/GiveView.vue'),
    },
    {
      path: '/bibliology',
      name: 'bibliology',
      component: () => import('../views/BibliologyView.vue'),
    },
    {
      path: '/one-on-one-guide',
      name: 'oneOnOneGuide',
      component: () => import('../views/OneOnOneGuideView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
