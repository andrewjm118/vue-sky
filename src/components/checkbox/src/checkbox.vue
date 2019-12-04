<template>
  <label
    ref="label"
    class="s-checkbox checkbox"
    :class="[size, {'is-disabled': disabled}]"
    :disabled="disabled"
  >
    <input
      v-if="group"
      v-model="computedValue"
      :indeterminate.prop="indeterminate"
      type="checkbox"
      :value="nativeValue"
      :disabled="disabled"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <input
      v-else
      type="checkbox"
      :checked="value"
      :disabled="disabled"
      :true-value="trueValue"
      :false-value="falseValue"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
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
  model: {
    prop: 'value',
    event: 'change'
  },
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
  computed: {
    computedValue: {
      // Never use this while this.group === undefined
      get () {
        return this.group.value
      },
      set (value) {
        // this.group.$emit.apply(this.group, ['change', value])
        this.group.$emit('change', value)
      }
    },
    group () {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'SCheckboxGroup') {
        parent = parent.$parent
      }
      return parent
    }
  },
  methods: {
    handleChange (event) {
      this.$emit('change', event.target.checked)
    },
    handleFocus (event) {
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.$emit('blur', event)
    }
  }
}
</script>
