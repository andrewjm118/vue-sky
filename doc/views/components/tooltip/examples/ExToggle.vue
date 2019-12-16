<template>
  <section>
    <button
      class="button is-primary"
      @click="active = !active"
    >
      切换
    </button>
    <hr>

    <s-tooltip
      label="我从来没有关闭"
      :active="active"
      always
    >
      <button class="button">
        Always
      </button>
    </s-tooltip>

    <s-tooltip
      label="Tooltip 右测显示"
      position="is-right"
      :active="active"
    >
      <button class="button is-dark">
        Right
      </button>
    </s-tooltip>
  </section>
</template>

<script>
export default {
  data () {
    return {
      active: true
    }
  }
}
</script>
