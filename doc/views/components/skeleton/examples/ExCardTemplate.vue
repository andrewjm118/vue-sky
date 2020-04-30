<template>
  <section>
    <div
      class="card"
      aria-id="contentIdForA11y3"
    >
      <div
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <template v-if="!loading">
            Component
          </template>
          <s-skeleton :active="loading" />
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <template v-if="!loading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>#buefy</a>.
          </template>
          <s-skeleton
            :active="loading"
            :count="2"
          />
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">
          <template v-if="!loading">Save</template>
          <s-skeleton :active="loading" />
        </a>
        <a class="card-footer-item">
          <template v-if="!loading">Edit</template>
          <s-skeleton :active="loading" />
        </a>
        <a class="card-footer-item">
          <template v-if="!loading">Delete</template>
          <s-skeleton :active="loading" />
        </a>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setInterval(() => {
      this.loading = !this.loading
    }, 3 * 1000)
  }
}
</script>
