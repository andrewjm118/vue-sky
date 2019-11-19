import Button from './src/button'
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
