/*
 * @Author: your name
 * @Date: 2020-04-24 17:13:30
 * @LastEditTime: 2020-04-28 14:18:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-sky\src\components\form\index.js
 */

import Form from './src/form'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
}

export default Form
