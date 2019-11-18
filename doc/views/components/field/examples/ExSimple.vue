<template>
  <section>
    <s-field label="Name">
      <s-input value="Kevin Garvey" />
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

    <s-field
      label="Password"
      type="is-warning"
      :message="['Password is too short', 'Password must have at least 8 characters']"
    >
      <s-input
        value="123"
        type="password"
        maxlength="30"
      />
    </s-field>

    <s-field label="Subject">
      <s-select placeholder="Select a subject">
        <option value="1">
          Option 1
        </option>
        <option value="2">
          Option 2
        </option>
      </s-select>
    </s-field>
  </section>
</template>
