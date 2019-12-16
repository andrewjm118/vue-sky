<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="field">
          <s-radio
            v-model="radioType"
            native-value="default"
          >
            Default
          </s-radio>
        </div>
        <div class="field">
          <s-radio
            v-model="radioType"
            native-value="info"
            type="is-info"
          >
            Info
          </s-radio>
        </div>
        <div class="field">
          <s-radio
            v-model="radioType"
            native-value="success"
            type="is-success"
          >
            Success
          </s-radio>
        </div>
        <div class="field">
          <s-radio
            v-model="radioType"
            native-value="danger"
            type="is-danger"
          >
            Danger
          </s-radio>
        </div>
        <div class="field">
          <s-radio
            v-model="radioType"
            native-value="warning"
            type="is-warning"
          >
            Warning
          </s-radio>
        </div>
      </div>
      <div class="column">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radio: 'default',
      radioType: 'default'
    }
  }
}
</script>
