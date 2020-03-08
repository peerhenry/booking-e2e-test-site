import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/book/:dealId',
    name: 'Book',
    props: true,
    component: () =>
      import(/* webpackChunkName: "book" */ '@/components/Book.vue'),
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: () =>
      import(
        /* webpackChunkName: "confirmation" */ '@/components/Confirmation.vue'
      ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
