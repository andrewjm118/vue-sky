<template>
  <span
    v-show="isShow"
    class="scroll-to"
    :class="{ 'scroll-top': isPreset }"
    @click="scrollTo"
  >
    <slot><span class="icon"><i
      class="fa"
      :class="[iconClass]"
    /></span></slot>
  </span>
</template>
<script>
import jump from 'jump.js'
import { getScroll } from '../../../utils/util'

export default {
  name: 'SScrollTo',
  props: {
    target: String,
    offset: {
      type: Number,
      default: 500
    },
    duration: {
      type: Number,
      default: 500
    },
    distance: Number
  },

  data () {
    return {
      isShow: true
    }
  },

  computed: {
    targetEl () {
      if (this.target === 'top') {
        return document.body
      } else if (this.distance) {
        return this.distance
      }
      return this.target
    },
    isPreset () {
      if (this.target === 'top' || this.target === 'bottom') {
        return true
      }
      return false
    },
    iconClass () {
      if (this.target === 'bottom') return 'fa-arrow-down'
      return 'fa-arrow-up'
    }
  },

  mounted () {
    if (this.isPreset) {
      this.isShow = false
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  beforeDestroy () {
    if (this.isPreset) {
      this.isShow = false
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {

    handleScroll () {
      this.isShow = getScroll(window, true) > this.offset
    },
    scrollTo () {
      jump(this.targetEl, {
        duration: this.duration
      })
    }
  }
}
</script>
