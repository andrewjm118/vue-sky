<template>
  <section>
    <s-field>
      <s-input
        placeholder="Email"
        type="email"
      />
    </s-field>

    <s-field>
      <s-input
        placeholder="Number"
        type="number"
        min="10"
        max="20"
      />
    </s-field>

    <s-field>
      <s-input
        placeholder="User handle (custom validation for only lowercase)"
        type="text"
        required
        validation-message="Only lowercase is allowed"
        pattern="[a-z]*"
      />
    </s-field>

    <s-field>
      <s-input
        placeholder="URL"
        type="url"
      />
    </s-field>

    <s-field>
      <s-input
        type="textarea"
        minlength="10"
        maxlength="100"
        placeholder="Maxlength automatically counts characters"
      />
    </s-field>
  </section>
</template>
