<template>
  <section>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input
          class="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-envelope" />
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle" />
        </span>
      </div>
      <p class="help is-danger">
        This email is invalid
      </p>
    </div>
  </section>
</template>
