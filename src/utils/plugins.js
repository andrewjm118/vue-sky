export const use = (plugin) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}

export const registerComponent = (Vue, component) => {
  Vue.component(component.name, component)
}

export const registerComponentProgrammatic = (Vue, property, component) => {
  console.log(66, Vue)
  if (!Vue.prototype.$sky) Vue.prototype.$sky = {}
  Vue.prototype.$sky[property] = component
}
