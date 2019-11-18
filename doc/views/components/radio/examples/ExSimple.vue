<template>
  <section>
    <div class="block">
      <s-radio
        v-model="radio"
        name="name"
        native-value="Flint"
      >
        Flint
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="Silver"
      >
        Silver
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="Jack"
      >
        Jack
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="Vane"
        disabled
      >
        Vane
      </s-radio>
    </div>
    <p class="content">
      <b>Selection:</b>
      {{ radio }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radio: 'Jack'
    }
  }
}
</script>
