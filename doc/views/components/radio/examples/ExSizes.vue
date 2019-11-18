<template>
  <section>
    <div class="field">
      <s-radio
        v-model="radio"
        size="is-small"
        native-value="small"
      >
        Small
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        native-value="default"
      >
        Default
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        size="is-medium"
        native-value="medium"
      >
        Medium
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        size="is-large"
        native-value="large"
      >
        Large
      </s-radio>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radio: 'default'
    }
  }
}
</script>
