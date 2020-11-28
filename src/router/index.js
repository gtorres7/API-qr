import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Welcome from '../views/welcome.vue'
import Scan from '../views/scan.vue'
import Session from '../views/session.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Welcome
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { allowAnonymous: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { allowAnonymous: true }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/scan',
    name: 'Scan',
    component: Scan
  },
  {
    path: '/new-session',
    name: 'NewSession',
    component: Session
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/* TODO: hacer esto
router.beforeEach((to, from, next) => {
  if (to.meta.allowAnonymous || isLoggedIn()) // is logedin es una funcion de paco
    next()
  else
    next('/login')
})
*/

export default router
