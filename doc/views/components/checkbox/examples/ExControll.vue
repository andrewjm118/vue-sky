<template>
  <section>
    <div class="field">
      <s-checkbox
        v-model="check"
        :disabled="disable"
      >
        {{ check ? '选中状态' : '未选中状态' }}
      </s-checkbox>
    </div>
    <div class="field">
      <s-button @click="handleChecked">
        {{ !check ? '选中' : '取消选中' }}
      </s-button>
      <s-button @click="handleDisabled">
        {{ disableLabel }}
      </s-button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      check: false,
      disable: false,
      disableLabel: '禁用'

    }
  },
  methods: {
    handleChecked () {
      this.check = !this.check
    },
    handleDisabled () {
      this.disable = !this.disable
      this.disableLabel = this.disable ? '启用' : '禁用'
    }
  }
}
</script>
