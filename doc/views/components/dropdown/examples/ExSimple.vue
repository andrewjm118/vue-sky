<template>
  <section>
    <s-dropdown aria-role="list">
      <button
        slot="trigger"
        class="button is-primary"
      >
        <span>Click me!</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item aria-role="listitem">
        Action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Another action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Something else
      </s-dropdown-item>
    </s-dropdown>

    <s-dropdown
      hoverable
      aria-role="list"
    >
      <button
        slot="trigger"
        class="button is-info"
      >
        <span>Hover me!</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item aria-role="listitem">
        Action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Another action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Something else
      </s-dropdown-item>
    </s-dropdown>

    <s-dropdown
      disabled
      aria-role="list"
    >
      <button
        slot="trigger"
        class="button"
      >
        <span>Disabled</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item aria-role="listitem">
        Action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Another action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Something else
      </s-dropdown-item>
    </s-dropdown>

    <s-dropdown aria-role="list">
      <p
        slot="trigger"
        class="tag is-success"
        role="button"
      >
        Custom trigger
      </p>

      <s-dropdown-item aria-role="listitem">
        Action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Another action
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        Something else
      </s-dropdown-item>
    </s-dropdown>
  </section>
</template>

<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
