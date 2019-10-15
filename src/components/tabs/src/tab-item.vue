
<script>
export default {
  name: 'STabItem',
  components: {
  },
  props: {
    label: String,
    icon: String,
    iconPack: String,
    disabled: Boolean,
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isActive: false,
      transitionName: null
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
    if (!this.$parent.$data._isTabs) {
      this.$destroy()
      throw new Error('You should wrap bTabItem on a bTabs')
    }
    this.$parent.tabItems.push(this)
  },
  beforeDestroy () {
    const index = this.$parent.tabItems.indexOf(this)
    if (index >= 0) {
      this.$parent.tabItems.splice(index, 1)
    }
  },
  methods: {
    activate (oldIndex, index) {
      this.transitionName = index < oldIndex
        ? 'slide-next'
        : 'slide-prev'
      this.isActive = true
    },
    deactivate (oldIndex, index) {
      this.transitionName = index < oldIndex
        ? 'slide-next'
        : 'slide-prev'
      this.isActive = false
    }
  },
  render (createElement) {
  // if destroy apply v-if
    if (this.$parent.destroyOnHide) {
      if (!this.isActive || !this.visible) {
        return
      }
    }
    const vnode = createElement('div', {
      directives: [{
        name: 'show',
        value: this.isActive && this.visible
      }],
      attrs: { class: 'tab-item' }
    }, this.$slots.default)
    // check animated prop
    if (this.$parent.animated) {
      return createElement('transition', {
        props: {
          name: this.transitionName
        },
        on: {
          'before-enter': () => { this.$parent.isTransitioning = true },
          'after-enter': () => { this.$parent.isTransitioning = false }
        }
      }, [vnode])
    }
    return vnode
  }
}
</script>
