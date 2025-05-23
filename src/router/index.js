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
      path: '/link-kids',
      name: 'linkKids',
      component: () => import('../views/LinkKidsHomeView.vue'),
    },
    {
      path: '/link-kids/book-of-acts',
      name: 'bookOfActs',
      component: () => import('../views/LinkKidsView.vue'),
    },
    {
      path: '/link-kids/acts-overview',
      name: 'actsOverview',
      component: () => import('../views/ActsOverviewLesson.vue'),
    },
    {
      path: '/link-kids/pentecost',
      name: 'pentecost',
      component: () => import('../views/Kids/Lessons/BookOfActs/ActsPentecostLesson.vue'),
    },
    {
      path: '/link-kids/ascension',
      name: 'ascension',
      component: () => import('../views/Kids/Lessons/BookOfActs/ActsAscensionLesson.vue'),
    },
    {
      path: '/link-kids/birth-of-church',
      name: 'birthOfChurch',
      component: () => import('../views/Kids/Lessons/BookOfActs/BirthOfChurchLesson.vue'),
    },
    {
      path: '/link-kids/crippled-beggar',
      name: 'crippledBeggar',
      component: () => import('../views/Kids/Lessons/BookOfActs/CrippledBeggarLesson.vue'),
    },
    {
      path: '/link-kids/peter-john-boldness',
      name: 'peterJohnBoldness',
      component: () => import('../views/Kids/Lessons/BookOfActs/PeterJohnBoldnessLesson.vue'),
    },
    {
      path: '/link-kids/believers-devoted',
      name: 'believersDevoted',
      component: () => import('../views/Kids/Lessons/BookOfActs/BelieversDevotedLesson.vue'),
    },
    {
      path: '/link-kids/seven-men-chosen',
      name: 'sevenMenChosen',
      component: () => import('../views/Kids/Lessons/BookOfActs/SevenMenChosenLesson.vue'),
    },
    {
      path: '/link-kids/stoning-of-stephen',
      name: 'stoningOfStephen',
      component: () => import('../views/Kids/Lessons/BookOfActs/StoningOfStephenLesson.vue'),
    },
    {
      path: '/link-kids/persecution-scatter-church',
      name: 'persecutionScatterChurch',
      component: () => import('../views/Kids/Lessons/BookOfActs/PersecutionScattersLesson.vue'),
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
    {
      path: '/prayer-guide',
      name: 'prayerGuide',
      component: () => import('../views/PrayerGuideView.vue'),
    },
    {
      path: '/14-days-prayer',
      name: '14DaysPrayer',
      component: () => import('../views/PrayerGuideView.vue'),
    },
    {
      path: '/link-group-guide',
      name: 'link-group-guide',
      component: () => import('../views/LinkGroupGuideView.vue')
    },
    // Catch all route - redirect to home
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
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
