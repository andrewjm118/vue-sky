/*
 * @Description: sidebar 侧边模态框
 * @Author: andrewjm
 * @Date: 2020-05-11 17:07:44
 * @LastEditTime: 2020-05-11 17:09:48
 * @LastEditors: andrewjm
 */

import Sidebar from './src/sidebar'

Sidebar.install = function (Vue) {
  Vue.component(Sidebar.name, Sidebar)
}

export default Sidebar
