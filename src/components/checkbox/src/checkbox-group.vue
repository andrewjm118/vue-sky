<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SCheckboxGroup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
