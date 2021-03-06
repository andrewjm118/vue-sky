<template>
  <hr
    v-if="separator"
    class="dropdown-divider"
  >
  <a
    v-else-if="!custom && !hasLink"
    class="dropdown-item"
    :class="anchorClasses"
    :role="ariaRoleItem"
    :tabindex="focusable ? 0 : null"
    @click="selectItem"
  >
    <slot />
  </a>
  <div
    v-else
    :class="itemClasses"
    :role="ariaRoleItem"
    :tabindex="focusable ? 0 : null"
    @click="selectItem"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SDropdownItem',
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, Function],
      default: null
    },
    separator: Boolean,
    disabled: Boolean,
    custom: Boolean,
    focusable: {
      type: Boolean,
      default: true
    },
    paddingless: Boolean,
    hasLink: Boolean,
    ariaRole: {
      type: String,
      default: ''
    }
  },
  computed: {
    anchorClasses () {
      return {
        'is-disabled': this.$parent.disabled || this.disabled,
        'is-paddingless': this.paddingless,
        'is-active': this.isActive
      }
    },
    itemClasses () {
      return {
        'dropdown-item': !this.hasLink,
        'is-disabled': this.disabled,
        'is-paddingless': this.paddingless,
        'is-active': this.isActive,
        'has-link': this.hasLink
      }
    },
    ariaRoleItem () {
      return this.ariaRole === 'menuitem' || this.ariaRole === 'listitem' ? this.ariaRole : null
    },
    /**
        * Check if item can be clickable.
        */
    isClickable () {
      return !this.$parent.disabled && !this.separator && !this.disabled && !this.custom
    },
    isActive () {
      if (this.$parent.selected === null) return false
      if (this.$parent.multiple) return this.$parent.selected.indexOf(this.value) >= 0
      return this.value === this.$parent.selected
    }
  },
  created () {
    if (!this.$parent.$data._isDropdown) {
      this.$destroy()
      throw new Error('You should wrap bDropdownItem on a bDropdown')
    }
  },
  methods: {
    /**
        * Click listener, select the item.
        */
    selectItem () {
      if (!this.isClickable) return

      this.$parent.selectItem(this.value)
      this.$emit('click')
    }
  }
}
</script>
