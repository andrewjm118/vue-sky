<template>
  <section>
    <s-field>
      <s-checkbox-button
        v-model="checkboxGroup"
        native-value="Nop"
        type="is-danger"
      >
        <s-icon icon="close" />
        <span>Nop</span>
      </s-checkbox-button>

      <s-checkbox-button
        v-model="checkboxGroup"
        native-value="Yep"
        type="is-success"
      >
        <s-icon icon="check" />
        <span>Yep</span>
      </s-checkbox-button>

      <s-checkbox-button
        v-model="checkboxGroup"
        native-value="Default"
      >
        Default
      </s-checkbox-button>

      <s-checkbox-button
        v-model="checkboxGroup"
        native-value="Disabled"
        disabled
      >
        Disabled
      </s-checkbox-button>
    </s-field>
    <p class="content">
      <b>Selection:</b>
      {{ checkboxGroup }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      checkboxGroup: []
    }
  }
}
</script>
