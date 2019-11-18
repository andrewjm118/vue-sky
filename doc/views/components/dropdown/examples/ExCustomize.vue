<template>
  <s-dropdown
    v-model="isPublic"
    aria-role="list"
  >
    <button
      slot="trigger"
      class="button is-primary"
      type="button"
    >
      <template v-if="isPublic">
        <s-icon icon="earth" />
        <span>Public</span>
      </template>
      <template v-else>
        <s-icon icon="account-multiple" />
        <span>Friends</span>
      </template>
      <s-icon icon="menu-down" />
    </button>

    <s-dropdown-item
      :value="true"
      aria-role="listitem"
    >
      <div class="media">
        <s-icon
          class="media-left"
          icon="earth"
        />
        <div class="media-content">
          <h3>Public</h3>
          <small>Everyone can see</small>
        </div>
      </div>
    </s-dropdown-item>

    <s-dropdown-item
      :value="false"
      aria-role="listitem"
    >
      <div class="media">
        <s-icon
          class="media-left"
          icon="account-multiple"
        />
        <div class="media-content">
          <h3>Friends</h3>
          <small>Only friends can see</small>
        </div>
      </div>
    </s-dropdown-item>
  </s-dropdown>
</template>

<script>
export default {
  data () {
    return {
      isPublic: true
    }
  }
}
</script>
