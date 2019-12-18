<template>
  <div>
    <!-- <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    /> -->

    <!-- <Example
      :component="ExTypes"
      :code="ExTypesCode"
      title="Types"
      vertical
    /> -->

    <!--  <Example
      :component="ExIcons"
      :code="ExIconsCode"
      title="Icons"
      vertical
    /> -->

    <!-- <Example
      :component="ExAutoClose"
      :code="ExAutoCloseCode"
      title="Auto Close"
      vertical
    >
      <p>Notification will be automatically closed after <code>duration</code>.</p>
    </Example> -->

    <Example
      :component="ExProgrammatically"
      :code="ExProgrammaticallyCode"
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/notification'

import ExProgrammatically from './examples/ExProgrammatically'
import ExProgrammaticallyCode from '!!raw-loader!./examples/ExProgrammatically'

export default {
  data () {
    return {
      api,
      ExProgrammatically,
      ExProgrammaticallyCode
    }
  }
}
</script>
