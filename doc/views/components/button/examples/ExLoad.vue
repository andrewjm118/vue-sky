<template>
  <section>
    <s-button
      type="is-primary"
      loading
      label="loading"
    />

    <s-button
      loading
    >
      loading
    </s-button>
    <s-button
      :loading="iconLoading"
      type="is-primary"
      icon-left="power"
      @click="iconClickMe"
    >
      Click me
    </s-button>
    <s-button
      :loading="loading"
      @click="clickMe"
    >
      Click me
    </s-button>
  </section>
</template>
<script>
export default {
  data () {
    return {
      iconLoading: false,
      loading: false
    }
  },
  methods: {
    clickMe () {
      this.loading = true
    },
    iconClickMe () {
      this.iconLoading = true
    }
  }
}
</script>
