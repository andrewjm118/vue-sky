import Tooltip from './src/tooltip'

Tooltip.install = function (Vue) {
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
