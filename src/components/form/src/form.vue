<template>
  <form>
    <slot />
  </form>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'SForm',
  componentName: 'SForm',
  props: {
    model: Object,
    rules: Object
  }, // 通过 $options.componentName 来找 form 组件
  data () {
    return {
      fields: [], // field: {prop, el}，保存 FormItem 的信息。
      formError: {}
    }
  },
  computed: {
    formRules () {
      const descriptor = {}
      this.fields.forEach(({ prop }) => {
        if (!Array.isArray(this.rules[prop])) {
          console.warn(`prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`)
          descriptor[prop] = [{ required: true }]
          return
        }
        descriptor[prop] = this.rules[prop]
      })
      return descriptor
    },
    formValues () {
      return this.fields.reduce((data, { prop }) => {
        data[prop] = this.model[prop]
        return data
      }, {})
    }
  },
  created () {
    this.$on('form.addField', (field) => {
      if (field) {
        this.fields = [...this.fields, field]
      }
    })
    this.$on('form.removeField', (field) => {
      if (field) {
        this.fields = this.fields.filter(({ prop }) => prop !== field.prop)
      }
    })
  },
  methods: {
    validate (callback) {
      const validator = new AsyncValidator(this.formRules)
      validator.validate(this.formValues, (errors) => {
        let formError = {}
        if (errors && errors.length) {
          errors.forEach(({ message, field }) => {
            formError[field] = message
          })
        } else {
          formError = {}
        }
        this.formError = formError
        // 让错误信息的顺序与表单组件的顺序相同
        const errInfo = []
        this.fields.forEach(({ prop, el }, index) => {
          if (formError[prop]) {
            errInfo.push(formError[prop])
          }
        })
        callback(errInfo)
      })
    }
  }
}
</script>

<style>

</style>
