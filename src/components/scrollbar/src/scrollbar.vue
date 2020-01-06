<template>
  <div ref="geminiScrollbar">
    <div class="gm-scrollbar -vertical">
      <div class="thumb" />
    </div>
    <div class="gm-scrollbar -horizontal">
      <div class="thumb" />
    </div>
    <div class="gm-scroll-view">
      <slot />
    </div>
  </div>
</template>

<script>
import GeminiScrollbar from 'gemini-scrollbar'
import 'gemini-scrollbar/gemini-scrollbar.css'
let geminiScrollbar

export default {
  name: 'SScrollbar',
  components: {},
  props: {
    autoCreate: {
      type: Boolean,
      default: true
    },
    autoshow: {
      type: Boolean,
      default: false
    },
    forceGemini: {
      type: Boolean,
      default: false
    },
    minThumbSize: {
      type: Number,
      default: 20
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    geminiScrollbar = new GeminiScrollbar({
      element: this.$refs.geminiScrollbar,
      createElements: false,
      onResize: () => {
        this.$emit('resize')
      },
      ...this.$props
    })
    if (this.autoCreate) {
      geminiScrollbar.create()
    }
    this.$emit('ready', geminiScrollbar)
  },
  updated () {
    if (geminiScrollbar) {
      geminiScrollbar.update()
    }
  },
  beforeDestroy () {
    if (geminiScrollbar) {
      geminiScrollbar.destroy()
    }
    geminiScrollbar = null
  },
  methods: {}
}
</script>
