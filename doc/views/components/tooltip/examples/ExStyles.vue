<template>
  <section>
    <s-tooltip
      label="Text is dashed"
      dashed
    >
      Simple text
    </s-tooltip>

    <s-tooltip
      label="Maybe you like a little animation"
      position="is-bottom"
      animated
    >
      <button class="button">
        Animated
      </button>
    </s-tooltip>

    <s-tooltip
      label="You prefer dark?"
      type="is-dark"
      position="is-bottom"
    >
      <button class="button">
        Dark
      </button>
    </s-tooltip>

    <s-tooltip
      label="Or light?"
      type="is-light"
      position="is-bottom"
    >
      <button class="button">
        Light
      </button>
    </s-tooltip>

    <s-tooltip
      label="I'm never closing"
      always
    >
      <button class="button">
        Always
      </button>
    </s-tooltip>

    <s-tooltip
      label="I'm square"
      position="is-bottom"
      square
    >
      <button class="button">
        Square
      </button>
    </s-tooltip>
  </section>
</template>
