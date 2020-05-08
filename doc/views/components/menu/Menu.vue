<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    />
    <Example
      :component="ExTheme"
      :code="ExThemeCode"
    />
    <Example
      :component="ExEvent"
      :code="ExEventCode"
    />
  </div>
</template>

<script>
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
import ExTheme from './examples/ExTheme'
import ExThemeCode from '!!raw-loader!./examples/ExTheme'
import ExEvent from './examples/ExEvent'
import ExEventCode from '!!raw-loader!./examples/ExEvent'
export default {
  data () {
    return {
      ExSimple,
      ExSimpleCode,
      ExTheme,
      ExThemeCode,
      ExEvent,
      ExEventCode
    }
  }
}
</script>
