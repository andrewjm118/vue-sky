<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    />

    <Example
      :component="ExPosition"
      :code="ExPositionCode"
      title="位置"
    />

    <Example
      :component="ExIcons"
      :code="ExIconsCode"
      title="图标"
    />

    <Example
      :component="ExSizes"
      :code="ExSizesCode"
      title="大小"
    />

    <Example
      :component="ExTypes"
      :code="ExTypesCode"
      title="类型"
      desc="如果你想要一个更经典的带有边框的样式，可以添加is-boxed类型。或者是具有is-toggle或is-toggle-round类型的单选按钮。"
    />

    <Example
      :component="ExExpanded"
      :code="ExExpandedCode"
      title="自适应宽度"
    />

    <Example
      :component="ExCustomHeaders"
      :code="ExCustomHeadersCode"
      title="自定义表头"
      desc="通过添加一个名为header的槽，您可以自定义选项卡项的header。"
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/tabs'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExPosition from './examples/ExPosition'
import ExPositionCode from '!!raw-loader!./examples/ExPosition'

import ExIcons from './examples/ExIcons'
import ExIconsCode from '!!raw-loader!./examples/ExIcons'

import ExSizes from './examples/ExSizes'
import ExSizesCode from '!!raw-loader!./examples/ExSizes'

import ExTypes from './examples/ExTypes'
import ExTypesCode from '!!raw-loader!./examples/ExTypes'

import ExExpanded from './examples/ExExpanded'
import ExExpandedCode from '!!raw-loader!./examples/ExExpanded'

import ExCustomHeaders from './examples/ExCustomHeaders'
import ExCustomHeadersCode from '!!raw-loader!./examples/ExCustomHeaders'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExPosition,
      ExIcons,
      ExSizes,
      ExTypes,
      ExExpanded,
      ExSimpleCode,
      ExPositionCode,
      ExIconsCode,
      ExSizesCode,
      ExTypesCode,
      ExExpandedCode,
      ExCustomHeaders,
      ExCustomHeadersCode
    }
  }
}
</script>
