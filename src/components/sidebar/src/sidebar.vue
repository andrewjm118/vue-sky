<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="s-sidebar"
      :class="[{ 'is-active': isActive }, placementClass]"
    >
      <div
        v-if="backdrop"
        class="modal-background"
        @click="backdropClose"
      />
      <transition :name="transitionName">
        <div
          v-show="isActive"
          class="modal-card"
          :style="modalWidth"
        >
          <header
            v-if="showHeader"
            class="modal-card-head aside-header"
          >
            <slot name="header">
              <p class="modal-card-title">
                {{ title }}
              </p>
              <span
                class="close"
                @click="handleCancel"
              >×</span>
            </slot>
          </header>
          <section class="modal-card-body aside-body">
            <slot />
          </section>
          <footer
            v-if="showFooter"
            class="modal-card-foot aside-footer"
          >
            <slot name="footer">
              <a
                v-if="showCancel"
                class="button"
                @click="handleCancel"
              >{{ cancelText }}</a>
              <a
                v-if="showOk"
                class="button is-primary"
                :class="{'is-loading': isLoading}"
                @click="handleOk"
              >{{ okText }}</a>
            </slot>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import ModalMixin from '../../../mixins/ModalMixin'

export default {
  name: 'SSidebar',
  mixins: [ModalMixin],
  props: {
    width: {
      type: Number,
      default: 450
    },
    placement: {
      type: String,
      default: 'left'
    },
    transition: {
      type: String,
      default: 'fadeLeft'
    }
  },

  computed: {
    placementClass () {
      if (this.placement && this.placement !== 'left') {
        return `aside-${this.placement}`
      }
      return null
    },
    transitionName () {
      if (this.placement === 'right' && this.transition === 'fadeLeft') {
        return 'fadeRight'
      }
      return this.transition
    }
  }
}
</script>
