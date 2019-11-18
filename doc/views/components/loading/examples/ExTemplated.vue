<template>
  <section>
    <s-field>
      <button
        class="button is-primary is-medium"
        @click="openLoading"
      >
        Launch loading
      </button>
    </s-field>
    <s-field>
      <b-switch v-model="isFullPage">
        Display loader over full page
      </b-switch>
    </s-field>
    <s-notification :closable="false">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
      <s-loading
        :is-full-page="isFullPage"
        :active.sync="isLoading"
        :can-cancel="true"
      >
        <s-icon
          pack="fas"
          icon="sync-alt"
          size="is-large"
          custom-class="fa-spin"
        />
      </s-loading>
    </s-notification>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      isFullPage: true
    }
  },
  methods: {
    openLoading () {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 10 * 1000)
    }
  }
}
</script>
