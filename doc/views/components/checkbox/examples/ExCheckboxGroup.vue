<template>
  <section>
    <div class="field">
      <s-checkbox-group
        v-model="animals"
        @change="handleChange"
      >
        <s-checkbox native-value="dog">
          Dog
        </s-checkbox>
        <s-checkbox native-value="cat">
          Cat
        </s-checkbox>
        <s-checkbox native-value="rabbit">
          rabbit
        </s-checkbox>
        <s-checkbox native-value="monkey">
          monkey
        </s-checkbox>
      </s-checkbox-group>
    </div>
    <p class="content">
      <b>选择:</b>
      {{ animals }}
    </p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      animals: []
    }
  },
  methods: {
    handleChange (val) {
      console.log(66, val)
    }
  }
}
</script>
