<template>
  <div
    class="s-tabs"
    :class="{'is-fullwidth' : expanded}"
  >
    <nav
      class="tabs"
      :class="navClasses"
    >
      <ul>
        <li
          v-for="(tabItem, index) in tabItems"
          v-show="tabItem.visible"
          :key="index"
          :class="{'is-active' : activeTab === index, 'is-disabled' : tabItem.disabled}"
        >
          <a @click="tabClick(index)">
            <template v-if="tabItem.$slots.header">
              <s-slot-component
                :component="tabItem"
                name="header"
                tag="span"
              />
            </template>
            <template v-else>
              <s-icon
                v-if="tabItem.icon"
                :icon="tabItem.icon"
                :pack="tabItem.iconPack"
                :size="size"
              />
              <span>{{ tabItem.label }}</span>
            </template>
          </a>
        </li>
      </ul>
    </nav>
    <section
      class="tab-content"
      :class="{'is-transitioning': isTransitioning}"
    >
      <slot />
    </section>
  </div>
</template>

<script>

import Icon from '../../icon'
import SlotComponent from '../../../utils/SlotComponent'

export default {
  name: 'STabs',
  components: {
    [Icon.name]: Icon,
    [SlotComponent.name]: SlotComponent
  },
  props: {
    value: Number,
    expanded: Boolean,
    type: String,
    size: String,
    position: String,
    animated: {
      type: Boolean,
      default: true
    },
    destroyOnHide: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeTab: this.value || 0,
      tabItems: [],
      contentHeight: 0,
      isTransitioning: false,
      _isTabs: true // Used internally by TabItem
    }
  },
  computed: {
    navClasses () {
      return [
        this.type,
        this.size,
        this.position,
        {
          'is-fullwidth': this.expanded,
          'is-toggle-rounded is-toggle': this.type === 'is-toggle-rounded'
        }
      ]
    }
  },
  watch: {
    value (value) {
      this.changeTab(value)
    },

    tabItems () {
      if (this.activeTab < this.tabItems.length) {
        this.tabItems[this.activeTab].isActive = true
      }
    }
  },
  created () {},
  mounted () {
    if (this.activeTab < this.tabItems.length) {
      this.tabItems[this.activeTab].isActive = true
    }
  },
  methods: {

    changeTab (newIndex) {
      if (this.activeTab === newIndex) return

      if (this.activeTab < this.tabItems.length) {
        this.tabItems[this.activeTab].deactivate(this.activeTab, newIndex)
      }
      this.tabItems[newIndex].activate(this.activeTab, newIndex)
      this.activeTab = newIndex
      this.$emit('change', newIndex)
    },
    tabClick (value) {
      this.$emit('input', value)
      this.changeTab(value)
    }
  }
}
</script>
