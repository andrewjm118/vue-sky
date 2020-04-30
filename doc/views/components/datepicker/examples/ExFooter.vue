<template>
  <s-field label="Select a date">
    <s-datepicker
      v-model="date"
      :first-day-of-week="1"
      placeholder="Click to select..."
    >
      <button
        class="button is-primary"
        @click="date = new Date()"
      >
        <s-icon icon="calendar-today" />
        <span>Today</span>
      </button>

      <button
        class="button is-danger"
        @click="date = null"
      >
        <s-icon icon="close" />
        <span>Clear</span>
      </button>
    </s-datepicker>
  </s-field>
</template>

<script>
export default {
  data () {
    return {
      date: new Date()
    }
  }
}
</script>
