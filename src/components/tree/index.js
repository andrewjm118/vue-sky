import Tree from './src/tree'

Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree)
}

export default Tree
