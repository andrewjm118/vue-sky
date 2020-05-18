/*
 * @Description: 滚动工具
 * @Author: andrewjm
 * @Date: 2020-05-18 15:50:21
 * @LastEditTime: 2020-05-18 15:50:58
 * @LastEditors: andrewjm
 */
import ScrollTo from './src/scroll-to'

ScrollTo.install = function (Vue) {
  Vue.component(ScrollTo.name, ScrollTo)
}

export default ScrollTo
