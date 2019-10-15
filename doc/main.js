import Vue from 'vue'
import App from './App'
import SkyUi from 'sky-ui'
import router from './router'

import hljs from 'highlight.js'

import CodeView from './components/CodeView'
import Example from './components/Example'
import ApiView from './components/ApiView'

Vue.prototype.$eventHub = new Vue()

Vue.use(SkyUi)

Vue.component('CodeView', CodeView)
Vue.component('Example', Example)
Vue.component('ApiView', ApiView)

Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  setTimeout(() => {
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  }, 200)
})

Vue.filter('pre', (text) => {
  if (!text) return

  // Remove first blank line
  text = text.replace(/^\s*[\r\n]/g, '')

  // Find how many whitespaces before the first character of the first line
  const whitespaces = /^[ \t]*./.exec(text).toString().slice(0, -1)

  // Replace first occurrance of whitespace on each line
  let newText = []
  text.split(/\r\n|\r|\n/).forEach((line) => {
    newText.push(line.replace(whitespaces, ''))
  })
  newText = newText.join('\r\n')

  return newText
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  ...App
})
