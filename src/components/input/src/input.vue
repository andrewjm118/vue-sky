<template>
  <div
    class="control"
    :class="rootClasses"
  >
    <input
      v-if="type !== 'textarea'"
      ref="input"
      class="input"
      :class="[inputClasses, customClass]"
      :type="newType"
      :autocomplete="newAutocomplete"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    >
    <textarea
      v-else
      ref="textarea"
      class="textarea"
      :class="[inputClasses, customClass]"
      :maxlength="maxlength"
      :value="computedValue"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <s-icon
      v-if="icon"
      class="is-left"
      :icon="icon"
      :pack="iconPack"
      :size="iconSize"
    />
    <s-icon
      v-if="!loading && (passwordReveal || statusTypeIcon)"
      class="is-right"
      :class="{
        'is-clickable' : passwordReveal
      }"
      :icon="passwordReveal ? passwordVisiableIcon : statusTypeIcon"
      :pack="iconPack"
      :size="iconSize"
      :type="!passwordReveal ? statusType : 'is-primary'"
      both
      @click.native="togglePasswordVisibility"
    />
    <small
      v-if="maxlength && hasCounter && type !== 'number'"
      class="help counter"
      :class="{'is-invisible' : !isFocused}"
    >
      {{ valueLength }} / {{ maxlength }}
    </small>
  </div>
</template>

<script>
import Icon from '../../icon'
import config from '../../../utils/config'
import FormElementMixin from '../../../utils/FormElementMixin'
export default {
  name: 'SInput',
  components: {
    [Icon.name]: Icon
  },
  mixins: [FormElementMixin],
  inheritAttrs: false,
  props: {
    value: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    passwordReveal: Boolean,
    hasCounter: {
      type: Boolean,
      default: () => config.defaultInputHasCounter
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newValue: this.value,
      newType: this.type,
      newAutocomplete: this.autocomplete || config.defaultInputAutocomplete,
      isPasswordVisible: false,
      _elementRef: this.type === 'textarea'
        ? 'textarea'
        : 'input'
    }
  },
  computed: {
    computedValue: {
      get () {
        return this.newValue
      },
      set (value) {
        this.newValue = value
        this.$emit('input', value)
        !this.isValid && this.checkHtml5Validity()
      }
    },

    rootClasses () {
      return [
        this.iconPosition,
        this.size,
        {
          'is-expanded': this.expanded,
          'is-loading': this.loading,
          'is-clearfix': !this.hasMessage
        }
      ]
    },
    inputClasses () {
      return [
        this.statusType,
        this.size,
        { 'is-rounded': this.rounded }
      ]
    },
    hasIconRight () {
      return this.passwordReveal || this.loading || this.statusTypeIcon
    },

    iconPosition () {
      if (this.icon && this.hasIconRight) {
        return 'has-icons-left has-icons-right'
      } else if (!this.icon && this.hasIconRight) {
        return 'has-icons-right'
      } else if (this.icon) {
        return 'has-icons-left'
      } else {
        return undefined
      }
    },

    statusTypeIcon () {
      switch (this.statusType) {
        case 'is-success': return 'check'
        case 'is-danger': return 'alert-circle'
        case 'is-info': return 'information'
        case 'is-warning': return 'alert'
        default: return ''
      }
    },
    hasMessage () {
      return !!this.statusMessage
    },
    passwordVisiableIcon () {
      return !this.isPasswordVisible ? 'eye' : 'eye-off'
    },
    valueLength () {
      if (typeof this.computedValue === 'string') {
        return this.computedValue.length
      } else if (typeof this.computedValue === 'number') {
        return this.computedValue.toString().length
      }
      return 0
    }
  },
  watch: {
    value (value) {
      this.newValue = value
    }
  },
  methods: {
    togglePasswordVisibility () {
      this.isPasswordVisible = !this.isPasswordVisible
      this.newType = this.isPasswordVisible ? 'text' : 'password'

      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    onInput (event) {
      this.$nextTick(() => {
        if (event.target) {
          this.computedValue = event.target.value
        }
      })
    }
  }
}
</script>
