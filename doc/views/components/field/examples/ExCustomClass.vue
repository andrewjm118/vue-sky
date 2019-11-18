<template>
  <section>
    <s-field
      label="Small"
      custom-class="is-small"
    >
      <s-input
        value="Kevin Garvey"
        size="is-small"
      />
    </s-field>
    <s-field
      label="Large"
      custom-class="is-large"
    >
      <s-input
        value="Kevin Garvey"
        size="is-large"
      />
    </s-field>

    <s-field
      label="Danger"
      custom-class="has-text-danger"
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
      label="Multiple (small and success)"
      custom-class="is-small has-text-success"
      type="is-success"
    >
      <s-input
        value="johnsilver"
        maxlength="30"
        size="is-small"
      />
    </s-field>

    <s-field
      label="Computed (medium and primary)"
      :custom-class="classes"
      type="is-primary"
    >
      <s-input
        value="johnsilver"
        maxlength="30"
        size="is-medium"
      />
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      firstClass: 'has-text-primary',
      secondClass: 'is-medium'
    }
  },
  computed: {
    classes () {
      return `${this.firstClass} ${this.secondClass}`
    }
  }
}
</script>
