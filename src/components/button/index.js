/* import Button from './src/button'
import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install (Vue) {
    registerComponent(Vue, Button)
  }
}

use(Plugin)

export default Plugin

export {
  Button
}
 */

import Button from './src/button'

Button.install = function (Vue) {
  Vue.component(Button.name, Button)
}

export default Button
