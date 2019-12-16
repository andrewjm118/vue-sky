<template>
  <label
    ref="label"
    class="s-radio radio"
    :class="[size, {'is-disabled': disabled}]"
    :disabled="disabled"
    @click="focus"
    @keydown.prevent.enter="$refs.label.click()"
  >
    <input
      ref="input"
      v-model="computedValue"
      type="radio"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="nativeValue"
      @click.stop
      @change="handleChange"
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
  name: 'SRadio',
  props: {
    value: [String, Number, Boolean, Function, Object, Array],
    nativeValue: [String, Number, Boolean, Function, Object, Array],
    type: String,
    disabled: Boolean,
    required: Boolean,
    name: String,
    size: String
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
    handleChange (event) {
      this.$emit('change', event.target.checked)
    },
    focus () {
      this.$refs.input.focus()
    }
  }
}
</script>
