<template>
  <section>
    <div class="field">
      <s-tag
        v-if="isTag1Active"
        type="is-primary"
        closable
        aria-close-label="Close tag"
        @close="isTag1Active = false"
      >
        蓝色标签
      </s-tag>
    </div>

    <div class="field">
      <s-tag
        v-if="isTag2Active"
        attached
        closable
        aria-close-label="Close tag"
        @close="isTag2Active = false"
      >
        标签
      </s-tag>
    </div>

    <div class="field">
      <s-tag
        v-if="isTag3Active"
        type="is-danger"
        attached
        closable
        aria-close-label="Close tag"
        @close="isTag3Active = false"
      >
        红色标签
      </s-tag>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isTag1Active: true,
      isTag2Active: true,
      isTag3Active: true
    }
  }
}
</script>
