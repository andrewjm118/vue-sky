<template>
  <s-form
    ref="form"
    :model="formData"
    :rules="rules"
  >
    <s-form-item
      label="日期测试"
      prop="riqi"
    >
      <s-datepicker
        v-model="formData.riqi"
        placeholder="Click to select..."
        icon="calendar-today"
        trap-focus
      />
    </s-form-item>
    <s-form-item
      label="select"
      prop="sel"
    >
      <s-select
        v-model="formData.sel"
        placeholder="请选择"
        expanded
      >
        <option value="圆形">
          圆形
        </option>
        <option value="方形">
          方形
        </option>
      </s-select>
    </s-form-item>

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

    <s-form-item
      label="复选框"
      prop="animals"
    >
      <s-checkbox-group
        v-model="formData.animals"
      >
        <s-checkbox native-value="dog">
          Dog
        </s-checkbox>
        <s-checkbox native-value="cat">
          Cat
        </s-checkbox>
        <s-checkbox native-value="rabbit">
          rabbit
        </s-checkbox>
        <s-checkbox native-value="monkey">
          monkey
        </s-checkbox>
      </s-checkbox-group>
    </s-form-item>

    <s-form-item
      label="Message"
      prop="message"
    >
      <s-input
        v-model.trim="formData.message"
        maxlength="200"
        type="textarea"
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
        user: '',
        riqi: '',
        sel: '',
        animals: []
      },
      rules: {
        tel: [
          { required: true, message: '您的手机号码未输入', trigger: 'change' }
        ],
        user: [
          { required: true, message: '必须输入用户', trigger: 'change' }
        ],
        riqi: [
          { type: 'date', required: true, message: '必须选择日期', trigger: 'change' }
        ],
        sel: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        message: [
          { required: true, message: '文本框必须输入', trigger: 'change' }
        ],
        animals: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
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
