import Vue from 'vue'
import Router from 'vue-router'

import routes from '../data/routes'

Vue.use(Router)

function route (path, component) {
  return {
    path,
    name: path,
    meta: routes[path],
    component: () => import(`../views/${component}`)
  }
}

// layout
const Layout = () => import('../layout')

const router = new Router({
  // mode: 'history',
  linkActiveClass: 'is-active',
  base: __dirname,
  routes: [
    route('/', 'Home'),
    {
      path: '/',
      component: Layout,
      children: [
        route('documentation', 'Documentation'),
        route('documentation/start', 'installation/Start'),
        route('documentation/button', 'components/button/Button')
      ]
    },
    { path: '*', redirect: '' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
