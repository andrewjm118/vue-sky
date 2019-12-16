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
      title="样式和大小"
      vertical
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/radio'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExTypes from './examples/ExTypes'
import ExTypesCode from '!!raw-loader!./examples/ExTypes'

export default {
  data () {
    return {
      api,
      ExSimple,

      ExTypes,

      ExSimpleCode,

      ExTypesCode

    }
  }
}
</script>
