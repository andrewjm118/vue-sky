<template>
  <section>
    <s-field label="Name">
      <s-input v-model="name" />
    </s-field>

    <s-field
      label="Email"
      type="is-danger"
      message="This email is invalid"
    >
      <s-input
        type="email"
        value="john@"
        maxlength="30"
      />
    </s-field>

    <s-field
      label="Username"
      type="is-success"
      message="This username is available"
    >
      <s-input
        value="johnsilver"
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
      name: 'John Silver'
    }
  }
}
</script>
