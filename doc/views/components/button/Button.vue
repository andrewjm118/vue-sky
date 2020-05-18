<template>
  <div>
    <!-- <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    /> -->
    <Example
      :component="ExTypesStates"
      :code="ExTypesStatesCode"
      title="按钮类型"
      desc="按钮的各种类型和状态"
      vertical
    />

    <Example
      :component="ExSizes"
      :code="ExSizesCode"
      title="按钮尺寸"
      desc="按钮有大、中、默认、小四种尺寸。通过设置 size 为 is-large is-small is-medium 分别把按钮设为大、中、小尺寸。若不设置 size，则尺寸为默认。"
      vertical
    />

    <Example
      :component="ExDisabled"
      :code="ExDisabledCode"
      title="不可用状态"
      desc="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
      vertical
    />

    <Example
      :component="ExIcons"
      :code="ExIconsCode"
      title="图标按钮"
      desc="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性"
      vertical
    />

    <Example
      :component="ExLoad"
      :code="ExLoadCode"
      title="加载中状态"
      desc="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/button'
import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'
import ExTypesStates from './examples/ExTypesStates'
import ExTypesStatesCode from '!!raw-loader!./examples/ExTypesStates'

import ExIcons from './examples/ExIcons'
import ExIconsCode from '!!raw-loader!./examples/ExIcons'

import ExSizes from './examples/ExSizes'
import ExSizesCode from '!!raw-loader!./examples/ExSizes'

import ExDisabled from './examples/ExDisabled'
import ExDisabledCode from '!!raw-loader!./examples/ExDisabled'

import ExLoad from './examples/ExLoad'
import ExLoadCode from '!!raw-loader!./examples/ExLoad'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExTypesStates,
      ExIcons,
      ExSizes,
      ExDisabled,
      ExLoad,
      ExSimpleCode,
      ExTypesStatesCode,
      ExIconsCode,
      ExSizesCode,
      ExDisabledCode,
      ExLoadCode
    }
  }
}
</script>
