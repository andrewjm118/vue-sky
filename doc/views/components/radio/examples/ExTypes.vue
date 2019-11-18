<template>
  <section>
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
        native-value="info"
        type="is-info"
      >
        Info
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        native-value="success"
        type="is-success"
      >
        Success
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        native-value="danger"
        type="is-danger"
      >
        Danger
      </s-radio>
    </div>
    <div class="field">
      <s-radio
        v-model="radio"
        native-value="warning"
        type="is-warning"
      >
        Warning
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
