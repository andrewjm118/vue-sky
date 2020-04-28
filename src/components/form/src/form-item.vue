<!--
 * @Author: andrewjm
 * @Date: 2020-04-26 15:06:14
 * @LastEditTime: 2020-04-27 16:39:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-sky\src\components\form\src\form-item.vue
 -->
<template>
  <s-field
    :label="label"
    :type="{ 'is-danger': validateState === 'error' && showMessage && form.showMessage }"
    :message="validateMessage"
  >
    <slot />
  </s-field>
</template>

<script>
import AsyncValidator from 'async-validator'
import emitter from '../../../mixins/emitter'

function noop () {}

function getPropByPath (obj, path) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0

  for (let len = keyArr.length; i < len - 1; ++i) {
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      throw new Error('please transfer a valid prop path to form item!')
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj[keyArr[i]]
  }
}
export default {
  name: 'SFormItem',
  componentName: 'SFormItem',
  mixins: [emitter],
  props: {
    prop: String,
    label: String,
    required: Boolean,
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    showMessage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isRequired: false
    }
  },
  computed: {
    form () {
      var parent = this.$parent
      while (parent.$options.componentName !== 'SForm') {
        parent = parent.$parent
      }
      return parent
    },
    fieldValue: {

      cache: false,
      get () {
        var model = this.form.model
        if (!model || !this.prop) { return }

        var path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }
        console.log(111, path)
        console.log(222, model)
        return getPropByPath(model, path).v
      }
    }

  },
  watch: {
    error (value) {
      this.validateMessage = value
      this.validateState = value ? 'error' : ''
    },
    validateStatus (value) {
      this.validateState = value
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('SForm', 'form.addField', [this])

      Object.defineProperty(this, 'initialValue', {
        value: this.fieldValue
      })

      const rules = this.getRules()

      if (rules.length) {
        rules.every(rule => {
          if (rule.required) {
            this.isRequired = true
            return false
          }
        })
        this.$on('form.blur', this.onFieldBlur)
        this.$on('form.change', this.onFieldChange)
      }
    }
  },
  beforeDestroy () {
    this.dispatch('SForm', 'form.removeField', [this])
  },
  methods: {
    validate (trigger, callback = noop) {
      var rules = this.getFilteredRule(trigger)
      if (!rules || rules.length === 0) {
        callback()
        return true
      }

      this.validateState = 'validating'

      var descriptor = {}
      descriptor[this.prop] = rules

      var validator = new AsyncValidator(descriptor)
      var model = {}

      model[this.prop] = this.fieldValue

      validator.validate(model, { firstFields: true }, (errors, fields) => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    },
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      const model = this.form.model
      const value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.')
      }

      const prop = getPropByPath(model, path)

      if (Array.isArray(value) && value.length > 0) {
        this.validateDisabled = true
        prop.o[prop.k] = []
      } else if (value !== '') {
        this.validateDisabled = true
        prop.o[prop.k] = this.initialValue
      }
    },
    getRules () {
      var formRules = this.form.rules
      var selfRuels = this.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(selfRuels || formRules || [])
    },
    getFilteredRule (trigger) {
      var rules = this.getRules()

      return rules.filter(rule => {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      })
    },
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    }
  }

}
</script>

<style>

</style>
