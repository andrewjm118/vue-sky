<template>
  <label
    ref="label"
    class="switch"
    :class="newClass"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
  >
    <input
      ref="input"
      v-model="computedValue"
      type="checkbox"
      :disabled="disabled"
      :name="name"
      :required="required"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
      @click.stop
    >
    <span
      class="check"
      :class="[{'is-elastic' : isMouseDown && !disabled}, type]"
    />
    <span class="control-label"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'SSwitch',
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    disabled: Boolean,
    type: String,
    name: String,
    required: Boolean,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      newValue: this.value,
      isMouseDown: false
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
      }
    },
    newClass () {
      return [
        this.size,
        { 'is-disabled': this.disabled },
        { 'is-rounded': this.rounded },
        { 'is-outlined': this.outlined }
      ]
    }
  },
  watch: {
    value (value) {
      this.newValue = value
    }
  },
  methods: {
    focus () {
      this.$refs.input.focus()
    }
  }
}
</script>
