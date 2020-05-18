/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-05-18 16:22:24
 * @LastEditTime: 2020-05-18 16:22:52
 * @LastEditors: andrewjm
 */

import Progress from './src/progress'

Progress.install = function (Vue) {
  Vue.component(Progress.name, Progress)
}

export default Progress
