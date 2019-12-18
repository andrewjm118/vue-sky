<template>
  <transition name="fade">
    <article
      v-show="isActive"
      class="notification"
      :class="[type, position]"
    >
      <button
        v-if="closable"
        class="delete"
        type="button"
        :aria-label="ariaCloseLabel"
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
            size="is-large"
            aria-hidden
          />
        </div>
        <div class="media-content">
          <p
            v-if="message"
            class="text"
            v-html="message"
          />
          <slot v-else />
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
import MessageMixin from '../../../utils/MessageMixin'

export default {
  name: 'SNotification',
  mixins: [MessageMixin],
  props: {
    position: String,
    ariaCloseLabel: String
  }
}
</script>
