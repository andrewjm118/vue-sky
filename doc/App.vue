<template>
  <transition
    name="fade"
    mode="out-in"
    @after-leave="afterLeave"
  >
    <router-view />
  </transition>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  data () {
    return {
      clipboard: null
    }
  },
  created () {
    this.setupClipboardControls()
  },
  beforeDestroy () {
    // Destroy clipboard instance if there's any
    this.clipboard && this.clipboard.destroy()
  },
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    },
    setupClipboardControls () {
      // Destroy clipboard instance if there's any
      this.clipboard && this.clipboard.destroy()

      this.clipboard = new Clipboard('.copy-code', {
        target: (trigger) => trigger.parentElement.parentElement.querySelector('code')
      })

      this.clipboard.on('success', (e) => {
        // this.$buefy.toast.open('Copied to clipboard!')
      })

      this.clipboard.on('error', (e) => {
        // this.$buefy.toast.open({
        //   message: 'Error while copying to clipboard :(',
        //   type: 'is-danger'
        // })
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.setupClipboardControls()
    next()
  }
}
</script>

<style lang="scss">
    @import "./assets/scss/main.scss";
</style>
