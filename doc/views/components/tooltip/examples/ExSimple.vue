<template>
  <section>
    <s-tooltip
      label="Tooltip right"
      position="is-right"
    >
      <button class="button is-dark">
        Right
      </button>
    </s-tooltip>

    <s-tooltip label="Tooltip top">
      <button class="button is-dark">
        Top (default)
      </button>
    </s-tooltip>

    <s-tooltip
      label="Tooltip bottom"
      position="is-bottom"
    >
      <button class="button is-dark">
        Bottom
      </button>
    </s-tooltip>

    <s-tooltip
      label="Tooltip left"
      position="is-left"
    >
      <button class="button is-dark">
        Left
      </button>
    </s-tooltip>

    <s-tooltip
      label="delayed by 1000ms"
      :delay="1000"
    >
      <button class="button is-primary">
        Delayed
      </button>
    </s-tooltip>
  </section>
</template>
