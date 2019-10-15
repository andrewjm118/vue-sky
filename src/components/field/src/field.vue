<template>
  <div
    class="field"
    :class="[rootClasses, fieldType()]"
  >
    <div
      v-if="horizontal"
      class="field-label"
      :class="[customClass, fieldLabelSize]"
    >
      <label
        v-if="hasLabel"
        :for="labelFor"
        :class="customClass"
        class="label"
      >
        <slot
          v-if="$slots.label"
          name="label"
        />
        <template v-else>{{ label }}</template>
      </label>
    </div>
    <template v-else>
      <label
        v-if="hasLabel"
        :for="labelFor"
        :class="customClass"
        class="label"
      >
        <slot
          v-if="$slots.label"
          name="label"
        />
        <template v-else>{{ label }}</template>
      </label>
    </template>
    <s-field-body
      v-if="horizontal"
      :message="newMessage ? formattedMessage : ''"
      :type="newType"
    >
      <slot />
    </s-field-body>
    <template v-else>
      <slot />
    </template>
    <p
      v-if="newMessage && !horizontal"
      class="help"
      :class="newType"
    >
      {{ formattedMessage }}
    </p>
  </div>
</template>

<script>
import config from '../../../utils/config'
import FieldBody from './field-body'
export default {
  name: 'SField',
  components: {
    [FieldBody.name]: FieldBody
  },
  props: {
    type: [String, Object],
    label: String,
    labelFor: String,
    message: [String, Array, Object],
    grouped: Boolean,
    groupMultiline: Boolean,
    position: String,
    expanded: Boolean,
    horizontal: Boolean,
    addons: {
      type: Boolean,
      default: true
    },
    customClass: String,
    labelPosition: {
      type: String,
      default: () => { return config.defaultFieldLabelPosition }
    }
  },
  data () {
    return {
      newType: this.type,
      newMessage: this.message,
      fieldLabelSize: null,
      _isField: true
    }
  },
  computed: {
    rootClasses () {
      return [this.newPosition, {
        'is-expanded': this.expanded,
        'is-grouped-multiline': this.groupMultiline,
        'is-horizontal': this.horizontal,
        'is-floating-in-label': this.hasLabel && !this.horizontal &&
                    this.labelPosition === 'inside',
        'is-floating-label': this.hasLabel && !this.horizontal &&
                    this.labelPosition === 'on-border'
      },
      this.numberInputClasses]
    },
    newPosition () {
      if (this.position === undefined) return

      const position = this.position.split('-')
      if (position.length < 1) return

      const prefix = this.grouped
        ? 'is-grouped-'
        : 'has-addons-'

      if (this.position) return prefix + position[1]
      return undefined
    },
    formattedMessage () {
      if (typeof this.newMessage === 'string') {
        return this.newMessage
      } else {
        const messages = []
        if (Array.isArray(this.newMessage)) {
          this.newMessage.forEach((message) => {
            if (typeof message === 'string') {
              messages.push(message)
            } else {
              for (const key in message) {
                if (message[key]) {
                  messages.push(key)
                }
              }
            }
          })
        } else {
          for (const key in this.newMessage) {
            if (this.newMessage[key]) {
              messages.push(key)
            }
          }
        }
        return messages.filter((m) => { if (m) return m }).join('<br>')
      }
    },
    hasLabel () {
      return this.label || this.$slots.label
    },
    numberInputClasses () {
      if (this.$slots.default) {
        const numberinput = this.$slots.default.filter((node) => node.tag && node.tag.toLowerCase().indexOf('numberinput') >= 0)[0]
        if (numberinput) {
          const classes = ['has-numberinput']
          const controlsPosition = numberinput.componentOptions.propsData.controlsPosition
          const size = numberinput.componentOptions.propsData.size
          if (controlsPosition) {
            classes.push(`has-numberinput-${controlsPosition}`)
          }
          if (size) {
            classes.push(`has-numberinput-${size}`)
          }
          return classes
        }
      }
      return null
    }
  },
  watch: {
    /**
        * Set internal type when prop change.
        */
    type (value) {
      this.newType = value
    },

    /**
        * Set internal message when prop change.
        */
    message (value) {
      this.newMessage = value
    }
  },
  mounted () {
    if (this.horizontal) {
      // Bulma docs: .is-normal for any .input or .button
      const elements = this.$el.querySelectorAll('.input, .select, .button, .textarea, .b-slider')
      if (elements.length > 0) {
        this.fieldLabelSize = 'is-normal'
      }
    }
  },
  methods: {
    fieldType () {
      if (this.grouped) return 'is-grouped'

      let renderedNode = 0
      if (this.$slots.default) {
        renderedNode = this.$slots.default.reduce((i, node) => node.tag ? i + 1 : i, 0)
      }
      if (
        renderedNode > 1 &&
                this.addons &&
                !this.horizontal
      ) {
        return 'has-addons'
      }
    }
  }
}
</script>
