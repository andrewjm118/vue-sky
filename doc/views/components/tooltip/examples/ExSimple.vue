<template>
  <section>
    <s-tooltip
      label="Tooltip right 提示文字"
      position="is-right"
    >
      <button class="button is-dark">
        右
      </button>
    </s-tooltip>

    <s-tooltip label="Tooltip top 提示文字">
      <button class="button is-dark">
        上 (default)
      </button>
    </s-tooltip>

    <s-tooltip
      label="Tooltip bottom 提示文字"
      position="is-bottom"
    >
      <button class="button is-dark">
        下
      </button>
    </s-tooltip>

    <s-tooltip
      label="Tooltip left 提示文字"
      position="is-left"
    >
      <button class="button is-dark">
        左
      </button>
    </s-tooltip>

    <s-tooltip
      label="delayed by 1000ms 提示文字"
      :delay="1000"
    >
      <button class="button is-primary">
        延迟
      </button>
    </s-tooltip>
  </section>
</template>
