<template>
  <section>
    <s-field>
      <s-radio-button
        v-model="radioButton"
        native-value="Nope"
        type="is-danger"
      >
        <s-icon icon="close" />
        <span>Nope</span>
      </s-radio-button>

      <s-radio-button
        v-model="radioButton"
        native-value="Yep"
        type="is-success"
      >
        <s-icon icon="check" />
        <span>Yep</span>
      </s-radio-button>

      <s-radio-button
        v-model="radioButton"
        native-value="Default"
      >
        Default
      </s-radio-button>

      <s-radio-button
        v-model="radioButton"
        native-value="Disabled"
        disabled
      >
        Disabled
      </s-radio-button>
    </s-field>
    <p class="content">
      <b>Selection:</b>
      {{ radioButton }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radioButton: ''
    }
  }
}
</script>
