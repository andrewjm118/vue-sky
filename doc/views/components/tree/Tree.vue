<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    />
  </div>
</template>

<script>
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
export default {
  data () {
    return {
      ExSimple,
      ExSimpleCode
    }
  }
}
</script>
