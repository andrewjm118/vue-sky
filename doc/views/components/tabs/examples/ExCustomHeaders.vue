<template>
  <s-tabs type="is-boxed">
    <s-tab-item>
      <template slot="header">
        <s-icon icon="information-outline" />
        <span> 问题 <s-tag rounded> 3 </s-tag> </span>
      </template>
    </s-tab-item>
    <s-tab-item>
      <template slot="header">
        <s-icon icon="source-pull" />
        <span> 提交问题 <s-tag rounded> {{ count }} </s-tag> </span>
      </template>
    </s-tab-item>
  </s-tabs>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  mounted () {
    setTimeout(() => {
      this.count++
    }, 3 * 1000)
  }
}
</script>
