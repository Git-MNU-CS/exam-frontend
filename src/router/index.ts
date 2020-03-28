import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { FrontConfig } from '@/router/front'
import Login from '@/views/Login.vue'
import FrontIndex from '@/views/Front.vue';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/front',
    name: 'front',
    component: FrontIndex,
    children: FrontConfig
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
