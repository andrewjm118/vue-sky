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
      <s-input
        v-model.trim="formData.tel"
        maxlength="30"
      />
    </s-form-item>

    <s-form-item
      label="用户"
      prop="user"
    >
      <s-input
        v-model.trim="formData.user"
        maxlength="30"
      />
    </s-form-item>
    <s-button
      type="is-primary"
      @click="handleSubmit"
    >
      保存
    </s-button>
  </s-form>
</template>
<script>
export default {
  data () {
    return {
      formData: {
        tel: '',
        user: ''
      },
      rules: {
        tel: [
          { required: true, message: '您的手机号码未输入', trigger: 'change' }
        ],
        user: [
          { required: true, message: '必须输入用户', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
