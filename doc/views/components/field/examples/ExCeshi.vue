<template>
  <s-form
    ref="form"
    :model="formData"
    :rules="rules"
  >
    <s-form-item
      label="手机号"
      prop="tel"
    >
      <input
        v-model.trim="formData.tel"
        type="tel"
        maxlength="11"
      >
    </s-form-item>
    <button @click="handleSubmit">
      保存
    </button>
  </s-form>
</template>
<script>
export default {
  data () {
    return {
      formData: {
        tel: ''
      },
      rules: {
        tel: [
          { required: true, message: '您的手机号码未输入' },
          { pattern: /^1[34578]\d{9}$/, message: '您的手机号码输入错误' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(errs => {
        console.log(errs)
      })
    }
  }
}
</script>
