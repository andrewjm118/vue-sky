<template>
  <label
    ref="label"
    class="s-checkbox checkbox"
    :class="[size, {'is-disabled': disabled}]"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      ref="input"
      v-model="computedValue"
      :indeterminate.prop="indeterminate"
      type="checkbox"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
      @click.stop
    >
    <span
      class="check"
      :class="type"
    />
    <span class="control-label"><slot /></span>
  </label>
</template>

<script>
export default {
  name: 'SCheckbox',
  components: {},
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    indeterminate: Boolean,
    type: String,
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array],
      default: false
    }
  },
  data () {
    return {
      newValue: this.value
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
