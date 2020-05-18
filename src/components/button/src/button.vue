<!--
 * @Description: 按钮组件
 * @Author: andrewjm
 * @Date: 2020-04-21 16:26:13
 * @LastEditTime: 2020-05-11 15:52:20
 * @LastEditors: andrewjm
v-bind="$attrs" 主要作用是识别html的原生元素,不需要用props来获取了 (class 和 style 除外) 不包括props中设定的，另外$attrs 可以继承祖父的元素
inheritAttrs: false, true 区别，生成的html 是否在标签上显示$attrs 元素
 -->
<template>
  <button
    class="button"
    v-bind="$attrs"
    :class="[size, type, {
      'is-rounded' : rounded,
      'is-btn-loading' : loading,
      'is-outlined' : outlined,
      'is-inverted' : inverted,
      'is-focused' : focused,
      'is-active': active,
      'is-hovered': hovered,
      'is-selected': selected
    }]"
    @click="$emit('click', $event)"
  >
    <s-icon
      v-if="iconLeft && !loading"
      :pack="iconPack"
      :icon="iconLeft"
      :size="iconSize"
    />
    <span v-if="label">{{ label }}</span>
    <span v-else-if="$slots.default">
      <slot />
    </span>
    <s-icon
      v-if="iconRight"
      :pack="iconPack"
      :icon="iconRight"
      :size="iconSize"
    />
  </button>
</template>

<script>
import Icon from '../../icon'
export default {
  name: 'SButton',
  components: {
    [Icon.name]: Icon
  },
  inheritAttrs: false,
  props: {
    type: [String, Object],
    size: String,
    label: String,
    iconPack: String,
    iconLeft: String,
    iconRight: String,
    rounded: Boolean,
    loading: Boolean,
    outlined: Boolean,
    inverted: Boolean,
    focused: Boolean,
    active: Boolean,
    hovered: Boolean,
    selected: Boolean
  },
  computed: {
    iconSize () {
      if (!this.size || this.size === 'is-medium') {
        return 'is-small'
      } else if (this.size === 'is-large') {
        return 'is-medium'
      }
      return this.size
    }
  },
  methods: {}
}

</script>
<style lang="scss">
 .is-btn-loading {
   pointer-events: none;
   &:before {
            animation: spinAround 500ms infinite linear;
            border: 2px solid #dbdbdb;
            border-radius: 290486px;
            border-right-color: transparent;
            border-top-color: transparent;
            content: "";
            display: block;
            height: 1em;
            position: relative;
            margin-right:0.3em;
            width: 1em;
        }
 }
</style>
