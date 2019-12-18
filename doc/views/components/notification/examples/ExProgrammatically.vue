<template>
  <section>
    <button
      class="button is-medium"
      @click="simple"
    >
      发布通知(默认)
    </button>

    <button
      class="button is-medium is-success"
      @click="success"
    >
      发布通知(自定义1)
    </button>

    <button
      class="button is-medium is-danger"
      @click="danger"
    >
      发布通知(自定义2)
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    simple () {
      this.$notify.open('发生了一件事')
    },
    success () {
      this.$notify.open({
        message: '发生了一件事正确!',
        type: 'is-success',
        queue: false
      })
    },
    danger () {
      this.$notify.open({
        duration: 5000,
        message: '发生了错误的事',
        position: 'is-bottom-right',
        type: 'is-danger',
        hasIcon: true
      })
    }
  }
}
</script>
