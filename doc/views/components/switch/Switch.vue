<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    />

    <Example
      :component="ExTypes"
      :code="ExTypesCode"
      title="类型和大小"
      vertical
    />

    <Example
      :component="ExStyles"
      :code="ExStylesCode"
      title="样式"
      vertical
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/switch'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExTypes from './examples/ExTypes'
import ExTypesCode from '!!raw-loader!./examples/ExTypes'

import ExStyles from './examples/ExStyles'
import ExStylesCode from '!!raw-loader!./examples/ExStyles'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExTypes,
      ExStyles,
      ExSimpleCode,
      ExTypesCode,
      ExStylesCode
    }
  }
}
</script>
