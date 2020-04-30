import Vue from 'vue'
import Router from 'vue-router'
import { afterEachGlobal } from './guards'
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
        route('documentation/install', 'installation/Install'),
        route('documentation/layout', 'Layout'),
        route('documentation/button', 'components/button/Button'),
        route('documentation/table', 'components/table/Table'),
        route('documentation/checkbox', 'components/checkbox/Checkbox'),
        route('documentation/field', 'components/field/Field'),
        route('documentation/form', 'components/form/Form'),
        route('documentation/input', 'components/input/Input'),
        route('documentation/radio', 'components/radio/Radio'),
        route('documentation/select', 'components/select/Select'),
        route('documentation/switch', 'components/switch/Switch'),
        route('documentation/tabs', 'components/tabs/Tabs'),
        route('documentation/tag', 'components/tag/Tag'),
        route('documentation/tooltip', 'components/tooltip/Tooltip'),
        route('documentation/skeleton', 'components/skeleton/Skeleton'),
        route('documentation/notification', 'components/notification/Notification'),
        route('documentation/loading', 'components/loading/Loading'),
        route('documentation/dropdown', 'components/dropdown/Dropdown'),
        route('documentation/icon', 'installation/Icon'),
        route('documentation/custom', 'installation/Custom'),
        route('documentation/alert', 'components/alert/Alert'),
        route('documentation/affix', 'components/affix/Affix'),
        route('documentation/datepicker', 'components/datepicker/Datepicker'),
        route('documentation/datetimepicker', 'components/datetimepicker/Datetimepicker')

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

router.afterEach(afterEachGlobal)

export default router
