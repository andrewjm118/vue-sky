<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    />

    <Example
      :component="ExMediaTemplate"
      :code="ExMediaTemplateCode"
      title="Media"
      vertical
    />

    <Example
      :component="ExCardTemplate"
      :code="ExCardTemplateCode"
      title="Card"
      vertical
    />
  </div>
</template>

<script>
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
import ExMediaTemplate from './examples/ExMediaTemplate'
import ExMediaTemplateCode from '!!raw-loader!./examples/ExMediaTemplate'
import ExCardTemplate from './examples/ExCardTemplate'
import ExCardTemplateCode from '!!raw-loader!./examples/ExCardTemplate'
export default {
  data () {
    return {
      ExSimple,
      ExSimpleCode,
      ExMediaTemplate,
      ExMediaTemplateCode,
      ExCardTemplate,
      ExCardTemplateCode
    }
  }
}
</script>
