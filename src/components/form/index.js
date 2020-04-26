/*
 * @Author: your name
 * @Date: 2020-04-24 17:13:30
 * @LastEditTime: 2020-04-26 17:14:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-sky\src\components\form\index.js
 */

import Form from './src/form'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
}

export default Form
