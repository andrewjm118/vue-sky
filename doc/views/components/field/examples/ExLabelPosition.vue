<template>
  <section>
    <div class="block">
      <s-radio
        v-model="labelPosition"
        native-value="on-border"
      >
        On Border
      </s-radio>
      <s-radio
        v-model="labelPosition"
        native-value="inside"
      >
        Inside
      </s-radio>
    </div>

    <s-field
      label="Name"
      :label-position="labelPosition"
    >
      <s-input value="Kevin Garvey" />
    </s-field>

    <s-field
      label="Email"
      :label-position="labelPosition"
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
      :label-position="labelPosition"
      type="is-success"
      message="This username is available"
    >
      <s-input
        value="johnsilver"
        maxlength="30"
      />
    </s-field>

    <s-field
      label="Password"
      :label-position="labelPosition"
      type="is-warning"
      :message="['Password is too short', 'Password must have at least 8 characters']"
    >
      <s-input
        value="123"
        type="password"
        maxlength="30"
      />
    </s-field>

    <s-field
      label="Subject"
      :label-position="labelPosition"
    >
      <s-select placeholder="Select a subject">
        <option value="1">
          Option 1
        </option>
        <option value="2">
          Option 2
        </option>
      </s-select>
    </s-field>

    <s-field
      label="Message"
      :label-position="labelPosition"
    >
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
      labelPosition: 'on-border'
    }
  }
}
</script>
