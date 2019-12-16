<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      vertical
    />

    <Example
      :component="ExClosable"
      :code="ExClosableCode"
      title="关闭标签"
      desc="点击关闭,同时发出关闭事件"
      vertical
    />

    <Example
      :component="ExTaglist"
      :code="ExTaglistCode"
      title="Tag 组"
      vertical
    />

    <Example
      :component="ExTaglistAttached"
      :code="ExTaglistAttachedCode"
      vertical
    >
      <p>使用<code>attached</code> prop将标签连接在一起。</p>
    </Example>

    <Example
      :component="ExFieldCombine"
      :code="ExFieldCombineCode"
      vertical
    >
      <p>字段组合分组。</p>
    </Example>

    <Example
      :component="ExSizes"
      :code="ExSizesCode"
      title="Sizes"
      vertical
    >
      <p>两个额外的大小.</p>
    </Example>

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/tag'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExClosable from './examples/ExClosable'
import ExClosableCode from '!!raw-loader!./examples/ExClosable'

import ExTaglist from './examples/ExTaglist'
import ExTaglistCode from '!!raw-loader!./examples/ExTaglist'

import ExTaglistAttached from './examples/ExTaglistAttached'
import ExTaglistAttachedCode from '!!raw-loader!./examples/ExTaglistAttached'

import ExFieldCombine from './examples/ExFieldCombine'
import ExFieldCombineCode from '!!raw-loader!./examples/ExFieldCombine'

import ExSizes from './examples/ExSizes'
import ExSizesCode from '!!raw-loader!./examples/ExSizes'

export default {
  data () {
    return {
      api,
      ExSimple,
      ExClosable,
      ExTaglist,
      ExTaglistAttached,
      ExFieldCombine,
      ExSizes,
      ExSimpleCode,
      ExClosableCode,
      ExTaglistCode,
      ExTaglistAttachedCode,
      ExFieldCombineCode,
      ExSizesCode
    }
  }
}
</script>
