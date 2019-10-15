import TagList from '../tag/src/tag-list'

TagList.install = function (Vue) {
  Vue.component(TagList.name, TagList)
}

export default TagList
