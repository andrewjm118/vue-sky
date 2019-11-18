<template>
  <section>
    <p class="content">
      <b>selected</b>: {{ selectedOptions }}
    </p>
    <s-dropdown
      v-model="selectedOptions"
      multiple
      aria-role="list"
    >
      <button
        slot="trigger"
        class="button is-primary"
        type="button"
      >
        <span>Selected ({{ selectedOptions.length }})</span>
        <s-icon icon="menu-down" />
      </button>

      <s-dropdown-item
        value="option1"
        aria-role="listitem"
      >
        <span>Option 1</span>
      </s-dropdown-item>

      <s-dropdown-item
        value="option2"
        aria-role="listitem"
      >
        <span>Option 2</span>
      </s-dropdown-item>

      <s-dropdown-item
        value="option3"
        aria-role="listitem"
      >
        <span>Option 3</span>
      </s-dropdown-item>
    </s-dropdown>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedOptions: []
    }
  }
}
</script>
