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
        <span>公共</span>
      </template>
      <template v-else>
        <s-icon icon="account-multiple" />
        <span>朋友</span>
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
          <h3>公共</h3>
          <small>每个人都能看到</small>
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
          <h3>朋友</h3>
          <small>仅朋友可见</small>
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
