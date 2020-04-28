<template>
  <div>
    <Example
      :component="ExValidation"
      :code="ExValidationCode"
      title="表单验证"
      desc="在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。"
      vertical
    />
  </div>
</template>

<script>
import ExValidation from './examples/ExValidation'
import ExValidationCode from '!!raw-loader!./examples/ExValidation'
export default {
  data () {
    return {
      ExValidation,
      ExValidationCode
    }
  }
}
</script>

<style>

</style>
