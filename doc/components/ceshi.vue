<template>
  <section>
    <s-button @click="clickMe">
      Click Me
    </s-button>
  </section>
</template>
<script>
export default {
  methods: {
    clickMe () {
      this.$buefy.notification.open('Clicked!!')
    }
  }
}
</script>
