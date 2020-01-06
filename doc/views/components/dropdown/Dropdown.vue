<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    />

    <Example
      :component="ExContentPosition"
      :code="ExContentPositionCode"
      title="内容和位置"
      paddingless
    >
      <p>添加 <code>custom</code> prop 将自定义内容添加到项目中。</p>
      <p>添加 <code>:focusable="false"</code> 如果你不希望它是可聚焦的。</p>
    </Example>

    <Example
      :component="ExHasLinkDisabled"
      :code="ExHasLinkDisabledCode"
      title="链接"
      paddingless
    >
      <p>添加<code>has-link</code> prop 去添加一个锚点或者路由链接</p>
    </Example>

    <Example
      :component="ExCustomize"
      :code="ExCustomizeCode"
      title="定制模式"
    />

    <Example
      :component="ExCustomizeMultiple"
      :code="ExCustomizeMultipleCode"
      title="多选"
    >
      <p>Add the <code>multiple</code> prop 选择一个或多个</p>
    </Example>

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/dropdown'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExContentPosition from './examples/ExContentPosition'
import ExContentPositionCode from '!!raw-loader!./examples/ExContentPosition'

import ExHasLinkDisabled from './examples/ExHasLinkDisabled'
import ExHasLinkDisabledCode from '!!raw-loader!./examples/ExHasLinkDisabled'

import ExCustomize from './examples/ExCustomize'
import ExCustomizeCode from '!!raw-loader!./examples/ExCustomize'

import ExCustomizeMultiple from './examples/ExCustomizeMultiple'
import ExCustomizeMultipleCode from '!!raw-loader!./examples/ExCustomizeMultiple'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExSimpleCode,
      ExContentPosition,
      ExContentPositionCode,
      ExHasLinkDisabled,
      ExHasLinkDisabledCode,
      ExCustomize,
      ExCustomizeCode,
      ExCustomizeMultiple,
      ExCustomizeMultipleCode
    }
  }
}
</script>
