<!--
 * @Author: your name
 * @Date: 2020-04-24 17:12:57
 * @LastEditTime: 2020-04-27 16:56:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-sky\src\components\form\src\form.vue
 -->
<template>
  <form class="form">
    <slot />
  </form>
</template>
<script>
export default {
  name: 'SForm',
  componentName: 'SForm',
  props: {
    model: Object,
    rules: Object,
    inline: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      fields: []
    }
  },
  watch: {
    rules () {
      this.validate()
    }
  },
  created () {
    this.$on('form.addField', (field) => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$on('form.removeField', (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate (callback) {
      let valid = true
      let count = 0
      this.fields.forEach((field, index) => {
        field.validate('', errors => {
          if (errors) {
            valid = false
          }
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid)
          }
        })
      })
    },
    validateField (prop, cb) {
      var field = this.fields.filter(field => field.prop === prop)[0]
      if (!field) { throw new Error('must call validateField with valid prop string!') }

      field.validate('', cb)
    }
  }
}
</script>

<style>

</style>
