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
      path: '/link-group',
      name: 'linkGroup',
      component: () => import('../views/ConnectView.vue'),
    },
    {
      path: '/link-group-guide',
      name: 'linkGroupGuide',
      component: () => import('../views/LinkGroupGuideView.vue'),
    },
    {
      path: '/link-group-guide/the-church',
      name: 'theChurch',
      component: () => import('../views/lessons/TheChurchView.vue'),
    },
    {
      path: '/link-group-guide/who-are-you-christian',
      name: 'whoAreYouChristian',
      component: () => import('../views/lessons/WhoAreYouChristianView.vue'),
    },
    {
      path: '/link-group-guide/the-bible',
      name: 'theBible',
      component: () => import('../views/lessons/TheBibleView.vue'),
    },
    {
      path: '/link-group-guide/the-person-of-god',
      name: 'thePersonOfGod',
      component: () => import('../views/lessons/ThePersonOfGodView.vue'),
    },
    {
      path: '/link-group-guide/but-i-am-a-good-person',
      name: 'butIAmAGoodPerson',
      component: () => import('../views/lessons/ButIAmAGoodPersonView.vue'),
    },
    {
      path: '/link-group-guide/praise',
      name: 'praise',
      component: () => import('../views/lessons/PraiseView.vue'),
    },
    {
      path: '/link-group-guide/love',
      name: 'love',
      component: () => import('../views/lessons/LoveView.vue'),
    },
    {
      path: '/link-group-guide/life',
      name: 'life',
      component: () => import('../views/lessons/LifeView.vue'),
    },
    {
      path: '/link-group-guide/death',
      name: 'death',
      component: () => import('../views/lessons/DeathView.vue'),
    },
    {
      path: '/link-group-guide/what-happens-when-one-believes',
      name: 'whatHappensWhenOneBelieves',
      component: () => import('../views/lessons/WhatHappensWhenOneBelievesView.vue'),
    },
    {
      path: '/link-group-guide/heaven',
      name: 'heaven',
      component: () => import('../views/lessons/HeavenView.vue'),
    },
    {
      path: '/link-group-guide/hell',
      name: 'hell',
      component: () => import('../views/lessons/HellView.vue'),
    },
    {
      path: '/link-group-guide/angels',
      name: 'angels',
      component: () => import('../views/lessons/AngelsView.vue'),
    },
    {
      path: '/link-group-guide/predestination-election',
      name: 'predestinationElection',
      component: () => import('../views/lessons/PredestinationElectionView.vue'),
    },
    {
      path: '/link-group-guide/assurance-of-salvation',
      name: 'assuranceOfSalvation',
      component: () => import('../views/lessons/AssuranceOfSalvationView.vue'),
    },
    {
      path: '/link-group-guide/forgiveness',
      name: 'forgiveness',
      component: () => import('../views/lessons/ForgivenessView.vue'),
    },
    {
      path: '/link-group-guide/the-age-to-come',
      name: 'theAgeToCome',
      component: () => import('../views/lessons/TheAgeToComeView.vue'),
    },
    {
      path: '/link-group-guide/existence-of-god',
      name: 'existenceOfGod',
      component: () => import('../views/lessons/ExistenceOfGodView.vue'),
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
      path: '/link-worship',
      name: 'linkWorship',
      component: () => import('../views/LinkWorshipHomeView.vue'),
    },
    {
      path: '/link-worship/songs',
      name: 'worshipSongs',
      component: () => import('../views/WorshipSongsView.vue'),
    },
    {
      path: '/link-worship/here-i-am-to-worship',
      name: 'hereIAmToWorship',
      component: () => import('../views/HereIAmToWorshipView.vue'),
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
      path: '/connect',
      name: 'connect',
      component: () => import('../views/ConnectView.vue'),
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
