import Checkbox from './src/checkbox'

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}

const Plugin = {
  install (Vue) {
    Vue.component(Checkbox.name, Checkbox)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Plugin)
}

export default Plugin

export {
  Checkbox
}
