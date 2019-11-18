<template>
  <section>
    <button
      class="button block"
      @click="isActive = !isActive"
    >
      Toggle
    </button>
    <s-notification
      :active.sync="isActive"
      aria-close-label="Close notification"
      positon="is-top-right"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </s-notification>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isActive: true
    }
  }
}
</script>
