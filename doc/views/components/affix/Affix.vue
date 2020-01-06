<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      title="固定在顶部"
      desc="最简单的用法"
    />
    <ApiView :data="api" />
  </div>
</template>
<script>
import api from './api/affix'
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
export default {
  data () {
    return {
      api,
      ExSimple,
      ExSimpleCode
    }
  }
}
</script>
