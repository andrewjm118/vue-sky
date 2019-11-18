<template>
  <section>
    <div class="block">
      <s-checkbox
        v-model="checkboxGroup"
        native-value="Silver"
      >
        Silver
      </s-checkbox>
      <s-checkbox
        v-model="checkboxGroup"
        native-value="Flint"
      >
        Flint
      </s-checkbox>
      <s-checkbox
        v-model="checkboxGroup"
        native-value="Vane"
      >
        Vane
      </s-checkbox>
      <s-checkbox
        v-model="checkboxGroup"
        native-value="Billy"
        disabled
      >
        Billy
      </s-checkbox>
    </div>
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
      checkboxGroup: ['Flint']
    }
  }
}
</script>
