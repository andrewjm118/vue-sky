<template>
  <section>
    <s-tooltip
      label="虚线"
      dashed
    >
      虚线
    </s-tooltip>

    <s-tooltip
      label="你喜欢的动画"
      position="is-bottom"
      animated
    >
      <button class="button">
        动画
      </button>
    </s-tooltip>

    <s-tooltip
      label="你喜欢深色风格?"
      type="is-dark"
      position="is-bottom"
    >
      <button class="button">
        深色
      </button>
    </s-tooltip>

    <s-tooltip
      label="亮色?"
      type="is-light"
      position="is-bottom"
    >
      <button class="button">
        亮色
      </button>
    </s-tooltip>

    <s-tooltip
      label="我一直在"
      always
    >
      <button class="button">
        一直在
      </button>
    </s-tooltip>

    <s-tooltip
      label="我是正方形"
      position="is-bottom"
      square
    >
      <button class="button">
        正方形
      </button>
    </s-tooltip>
  </section>
</template>
