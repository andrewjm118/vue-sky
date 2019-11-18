<template>
  <section>
    <button
      class="button block"
      :disabled="isActive"
      @click="isActive = true"
    >
      Show
    </button>
    <s-notification
      auto-close
      type="is-danger"
      :active.sync="isActive"
      aria-close-label="Close notification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </s-notification>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isActive: false
    }
  }
}
</script>
