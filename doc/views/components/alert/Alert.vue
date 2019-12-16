<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      title="基本"
      desc="最简单的用法，适用于简短的警告提示。"
    />
    <Example
      :component="ExType"
      :code="ExTypeCode"
      title="四种样式"
      desc="共有四种样式 success、info、warning、danger。"
    />
    <Example
      :component="ExIcon"
      :code="ExIconCode"
      title="图标和描述信息"
    />
    <ApiView :data="api" />
  </div>
</template>
<script>
import api from './api/alert'
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
import ExType from './examples/ExType'
import ExTypeCode from '!!raw-loader!./examples/ExType'
import ExIcon from './examples/ExIcon'
import ExIconCode from '!!raw-loader!./examples/ExIcon'
export default {
  data () {
    return {
      api,
      ExSimple,
      ExType,
      ExSimpleCode,
      ExTypeCode,
      ExIcon,
      ExIconCode
    }
  }
}
</script>
