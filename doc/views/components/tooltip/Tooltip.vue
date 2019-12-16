<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    />

    <Example
      :component="ExStyles"
      :code="ExStylesCode"
      title="风格"
      vertical
    />

    <Example
      :component="ExMultilined"
      :code="ExMultilinedCode"
      title="多行数据"
      desc="可以有多行"
      vertical
    />

    <Example
      :component="ExToggle"
      :code="ExToggleCode"
      vertical
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/tooltip'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExStyles from './examples/ExStyles'
import ExStylesCode from '!!raw-loader!./examples/ExStyles'

import ExMultilined from './examples/ExMultilined'
import ExMultilinedCode from '!!raw-loader!./examples/ExMultilined'

import ExToggle from './examples/ExToggle'
import ExToggleCode from '!!raw-loader!./examples/ExToggle'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExStyles,
      ExMultilined,
      ExToggle,
      ExSimpleCode,
      ExStylesCode,
      ExMultilinedCode,
      ExToggleCode
    }
  }
}
</script>
