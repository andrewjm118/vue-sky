<template>
  <s-field label="Select a date">
    <s-datepicker
      v-model="dates"
      placeholder="Click to select..."
      range
    />
  </s-field>
</template>

<script>
export default {
  data () {
    return {
      dates: []
    }
  }
}
</script>
