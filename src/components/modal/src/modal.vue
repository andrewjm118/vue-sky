<template>
  <transition name="fade">
    <div
      v-show="isActive"
      class="modal align-baseline"
      :class="{ 'is-active': isActive }"
    >
      <div
        v-if="backdrop"
        class="modal-background"
        @click="backdropClose"
      />
      <transition :name="transition">
        <div
          v-show="isActive"
          class="modal-card"
          :style="modalWidth"
        >
          <header
            v-if="showHeader"
            class="modal-card-head"
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
          <section class="modal-card-body">
            <slot />
          </section>
          <footer
            v-if="showFooter"
            class="modal-card-foot"
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
  name: 'SModal',
  mixins: [ModalMixin]
}
</script>
