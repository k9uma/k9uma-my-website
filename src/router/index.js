import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Podcast from '../views/Podcast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/podcast-codecast',
    name: 'podcast',
    component: Podcast
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/blog',
    name: 'blog',
    component: function () {
      return import('../views/Blog.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
