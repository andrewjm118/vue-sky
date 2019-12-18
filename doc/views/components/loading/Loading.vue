<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
    >
      <p>加载将在大约10秒后关闭，按esc或单击圆圈外部。</p>
      <p>
        用 <code>:is-full-page="false"</code> 将加载程序限制在其容器中.<br>
        在这种情况下，容器元素应该定位为 <code>position: relative</code>.
      </p>
    </Example>

    <Example
      :component="ExProgrammatically"
      :code="ExProgrammaticallyCode"
      title="程序控制载入"
    >
      <p>当您想要关闭加载时，从组件中调用<code>close()</code>方法。</p>
    </Example>

    <Example
      :component="ExTemplated"
      :code="ExTemplatedCode"
      title="图标样式"
    />

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/loading'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExProgrammatically from './examples/ExProgrammatically'
import ExProgrammaticallyCode from '!!raw-loader!./examples/ExProgrammatically'

import ExTemplated from './examples/ExTemplated'
import ExTemplatedCode from '!!raw-loader!./examples/ExTemplated'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExProgrammatically,
      ExTemplated,
      ExSimpleCode,
      ExProgrammaticallyCode,
      ExTemplatedCode
    }
  }
}
</script>
