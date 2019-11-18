import Button from './src/button'
import { use, registerComponent } from '../../utils/plugins'

const Plugins = {
  install (Vue) {
    registerComponent(Vue, Button)
  }
}

use(Plugins)
/* Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
 */

export default Plugin

export {
  Button
}
