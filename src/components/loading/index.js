import Vue from 'vue'
import Loading from './src/loading'

const LoadingProgrammatic = {
  open (params) {
    const defaultParam = {
      programmatic: true
    }
    const propsData = Object.assign(defaultParam, params)

    const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
    const LoadingComponent = vm.extend(Loading)
    return new LoadingComponent({
      el: document.createElement('div'),
      propsData
    })
  }
}

Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading)
}

export {
  Loading,
  LoadingProgrammatic
}
