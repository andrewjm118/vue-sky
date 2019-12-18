<template>
  <section>
    <s-field>
      <button
        class="button is-primary is-medium"
        @click="openLoading"
      >
        启动加载
      </button>
    </s-field>
    <s-field>
      <s-switch v-model="isFullPage">
        显示加载整个页面
      </s-switch>
    </s-field>
    <s-notification :closable="false">
      在此容器内
      <s-loading
        :is-full-page="isFullPage"
        :active.sync="isLoading"
        :can-cancel="true"
      >
        <s-icon
          pack="fas"
          icon="sync-alt"
          size="is-large"
          custom-class="fa-spin"
        />
      </s-loading>
    </s-notification>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      isFullPage: true
    }
  },
  methods: {
    openLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 10 * 1000)
    }
  }
}
</script>
