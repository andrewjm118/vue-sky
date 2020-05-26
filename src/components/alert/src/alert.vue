<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="alert"
      :class="[type,position]"
    >
      <button
        v-if="closable"
        class="delete"
        type="button"
        @click="close"
      />
      <div class="media">
        <div
          v-if="icon && hasIcon"
          class="media-left"
        >
          <s-icon
            :icon="icon"
            :pack="iconPack"
            both
            aria-hidden
          />
        </div>
        <div class="media-content">
          <p
            v-if="message"
            class="text"
            v-text="message"
          />
          <slot v-else />
          <p
            v-if="desc"
            class="text"
            v-text="desc"
          />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'SAlert',
  props: {
    position: String,
    active: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    message: String,
    desc: String,
    type: String,
    hasIcon: Boolean,
    iconPack: String
  },
  data () {
    return {
      isActive: this.active
    }
  },
  computed: {
    icon () {
      switch (this.type) {
        case 'is-info':
          return 'information'
        case 'is-success':
          return 'check-circle'
        case 'is-warning':
          return 'alert'
        case 'is-danger':
          return 'alert-circle'
        default:
          return null
      }
    }
  },
  watch: {
    active (value) {
      this.isActive = value
    }
  },
  methods: {
    close () {
      this.isActive = false
      this.$emit('close')
      this.$emit('update:active', false)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
