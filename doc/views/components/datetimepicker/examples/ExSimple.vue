<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <div class="control">
        <s-switch v-model="showWeekNumber">
          Show week number
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="formatAmPm">
          AM/PM
        </s-switch>
      </div>
      <div class="control">
        <s-switch v-model="enableSeconds">
          Enable seconds
        </s-switch>
      </div>
    </s-field>
    <s-field label="Select datetime">
      <s-datetimepicker
        rounded
        placeholder="Click to select..."
        icon="calendar-today"
        :datepicker="{ showWeekNumber }"
        :timepicker="{ enableSeconds, hourFormat: format }"
        horizontal-time-picker
      />
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      showWeekNumber: false,
      formatAmPm: false,
      enableSeconds: false
    }
  },
  computed: {
    format () {
      return this.formatAmPm ? '12' : '24'
    }
  }
}
</script>
