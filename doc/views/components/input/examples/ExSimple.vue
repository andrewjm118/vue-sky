<template>
  <section>
    <s-field label="姓名">
      <s-input v-model="name" />
    </s-field>

    <s-field
      label="Email"
      type="is-danger"
      message="邮箱必填项"
    >
      <s-input
        type="email"
        value="63901040@qq.com"
        maxlength="30"
      />
    </s-field>

    <s-field
      label="用户名"
      type="is-success"
      message="用户名必填"
    >
      <s-input
        value="张三"
        maxlength="30"
      />
    </s-field>

    <s-field label="Password">
      <s-input
        type="password"
        value="iwantmytreasure"
        password-reveal
      />
    </s-field>

    <s-field label="Message">
      <s-input
        maxlength="200"
        type="textarea"
      />
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      name: 'andrew jm'
    }
  }
}
</script>
