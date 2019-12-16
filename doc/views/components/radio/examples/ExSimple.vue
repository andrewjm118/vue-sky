<template>
  <section>
    <div class="block">
      <s-radio
        v-model="radio"
        name="name"
        native-value="北京"
      >
        北京
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="上海"
      >
        上海
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="广州"
      >
        广州
      </s-radio>
      <s-radio
        v-model="radio"
        name="name"
        native-value="深圳"
        disabled
      >
        深圳
      </s-radio>
    </div>
    <p class="content">
      <b>选择:</b>
      {{ radio }}
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radio: '广州'
    }
  }
}
</script>
