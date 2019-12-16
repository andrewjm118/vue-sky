<template>
  <div>
    <Example
      :component="ExSimple"
      :code="ExSimpleCode"
      title="基础案例"
    />

    <Example
      :component="ExControll"
      :code="ExControllCode"
      title="受控的 checkbox"
      desc="联动 checkbox"
      vertical
    />

    <Example
      :component="ExCheckboxGroup"
      :code="ExCheckboxGroupCode"
      title="Checkbox 组"
      desc="设置 Checkbox 组"
      vertical
    />

    <Example
      :component="ExIndeterminate"
      :code="ExIndeterminateCode"
      title="全选"
      desc="在实现全选效果时，你可能会用到 indeterminate 属性"
      vertical
    />

    <Example
      :component="ExTypes"
      :code="ExTypesCode"
      title="大小和样式"
      desc="checkbox不同的大小和显示样子"
      vertical
    />
    <!--
    <Example
      :component="ExCheckboxButton"
      :code="ExCheckboxButtonCode"
      title="Checkbox Button"
    >
      <p>
        You have to wrap them on a <router-link to="/documentation/field">
          Field
        </router-link>.
      </p>
    </Example> -->

    <ApiView :data="api" />
  </div>
</template>

<script>
import api from './api/checkbox'

import ExSimple from './examples/ExSimple'
import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

import ExControll from './examples/ExControll'
import ExControllCode from '!!raw-loader!./examples/ExControll'

import ExCheckboxGroup from './examples/ExCheckboxGroup'
import ExCheckboxGroupCode from '!!raw-loader!./examples/ExCheckboxGroup'

import ExArray from './examples/ExArray'
import ExArrayCode from '!!raw-loader!./examples/ExArray'

import ExIndeterminate from './examples/ExIndeterminate'
import ExIndeterminateCode from '!!raw-loader!./examples/ExIndeterminate'

import ExTypes from './examples/ExTypes'
import ExTypesCode from '!!raw-loader!./examples/ExTypes'
/*
import ExSizes from './examples/ExSizes'
import ExSizesCode from '!!raw-loader!./examples/ExSizes'

import ExCheckboxButton from './examples/ExCheckboxButton'
import ExCheckboxButtonCode from '!!raw-loader!./examples/ExCheckboxButton' */

export default {
  data () {
    return {
      api,
      ExSimple,
      ExSimpleCode,
      ExControll,
      ExControllCode,
      ExCheckboxGroup,
      ExCheckboxGroupCode,
      ExArray,
      ExArrayCode,
      ExIndeterminate,
      ExIndeterminateCode,
      ExTypes,
      ExTypesCode
      /*
      ExSizes,
      ExSizesCode,
      ExCheckboxButton,
      ExCheckboxButtonCode */
    }
  }
}
</script>
