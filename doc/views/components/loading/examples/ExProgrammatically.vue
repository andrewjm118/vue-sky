<template>
  <div>
    <s-field>
      <button
        class="button is-primary is-medium"
        @click="open"
      >
        启动加载
      </button>
    </s-field>
    <s-field>
      <s-switch v-model="isFullPage">
        显示加载整个页面
      </s-switch>
    </s-field>
    <s-notification
      ref="element"
      :closable="false"
    >
      在此容器内
    </s-notification>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isFullPage: true
    }
  },
  methods: {
    open () {
      const loadingComponent = this.$loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el
      })
      setTimeout(() => loadingComponent.close(), 3 * 1000)
    }
  }
}
</script>
