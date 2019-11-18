<template>
  <section>
    <s-checkbox v-model="hasError">
      Show errors
    </s-checkbox>

    <s-field
      label="Username"
      :type="{ 'is-danger': hasError }"
      :message="{ 'Username is not available': hasError }"
    >
      <s-input
        value="johnsilver"
        maxlength="30"
      />
    </s-field>

    <s-field
      label="Password"
      :type="{ 'is-danger': hasError }"
      :message="[
        { 'Password is too short': hasError },
        { 'Password must have at least 8 characters': hasError }
      ]"
    >
      <s-input
        value="123"
        type="password"
        maxlength="30"
      />
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      hasError: true
    }
  }
}
</script>
