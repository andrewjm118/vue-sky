<template>
  <transition :name="animation">
    <div
      v-if="isActive"
      class="loading-overlay is-active"
      :class="{'is-full-page' : isFullPage}"
    >
      <div
        class="loading-background"
        @click="cancel"
      />
      <slot>
        <div class="loading-icon" />
      </slot>
    </div>
  </transition>
</template>

<script>
import { removeElement } from '../../../utils/helpers'
export default {
  name: 'SLoading',
  components: {},
  props: {
    active: Boolean,
    programmatic: Boolean,
    isFullPage: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'fade'
    },
    container: [Object, Function],
    canCancel: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function,
      default: () => {}
    }

  },
  data () {
    return {
      isActive: this.active || false
    }
  },
  watch: {
    active (value) {
      this.isActive = value
    }
  },
  created () {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.keyPress)
    }
  },
  beforeMount () {
    if (this.programmatic) {
      if (!this.container) {
        document.body.appendChild(this.$el)
      } else {
        this.isFullPage = false
        this.container.appendChild(this.$el)
      }
    }
  },
  mounted () {
    if (this.programmatic) this.isActive = true
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      document.removeEventListener('keyup', this.keyPress)
    }
  },
  methods: {
    cancel () {
      if (!this.canCancel || !this.isActive) return
      this.close()
    },
    close () {
      this.onCancel.apply(null, arguments)
      this.$emit('close')
      this.$emit('update:active', false)

      if (this.programmatic) {
        this.isActive = false
        setTimeout(() => {
          this.$destroy()
          removeElement(this.$el)
        }, 150)
      }
    },
    keyPress (event) {
      if (event.keyCode === 27) this.cancel()
    }
  }
}
</script>
