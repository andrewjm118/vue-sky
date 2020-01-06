<template>
  <section>
    <s-dropdown aria-role="list">
      <button
        slot="trigger"
        class="button is-primary"
      >
        <span>点击我!</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item aria-role="listitem">
        动作1
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        动作2
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        其他
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
        <span>悬停!</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item aria-role="listitem">
        动作1
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        动作2
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        其他
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
        动作1
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        动作2
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        其他
      </s-dropdown-item>
    </s-dropdown>

    <s-dropdown aria-role="list">
      <p
        slot="trigger"
        class="tag is-success"
        role="button"
      >
        自定义触发
      </p>

      <s-dropdown-item aria-role="listitem">
        动作1
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        动作2
      </s-dropdown-item>
      <s-dropdown-item aria-role="listitem">
        其他
      </s-dropdown-item>
    </s-dropdown>
  </section>
</template>

<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
