<template>
  <div>
    <label
      v-if="label"
      :for="prop"
    >
      {{ label }}
    </label>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SFormItem',
  props: {
    prop: String,
    label: String
  },
  computed: {
    form () {
      let parent = this.$parent
      while (parent.$options.componentName !== 'SForm') {
        parent = parent.$parent
      }
      return parent
    },
    fieldError () {
      if (!this.prop) {
        return ''
      }
      const formError = this.form.formError
      return formError[this.prop] || ''
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatchEvent('form.addField', {
        prop: this.prop,
        el: this.$el
      })
    }
  },
  beforeDestroy () {
    if (this.prop) {
      this.dispatchEvent('form.removeField', {
        prop: this.prop
      })
    }
  },
  methods: {
    dispatchEvent (eventName, params) {
      if (typeof this.form !== 'object' && !this.form.$emit) {
        console.error('FormItem必须在Form组件内')
        return
      }
      this.form.$emit(eventName, params)
    }
  }

}
</script>

<style>

</style>
