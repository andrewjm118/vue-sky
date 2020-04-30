<template>
  <section>
    <s-field>
      <div class="control">
        <s-switch v-model="showWeekNumber">
          Show week number
        </s-switch>
      </div>
    </s-field>
    <s-field label="Select a date">
      <s-datepicker
        :show-week-number="showWeekNumber"
        placeholder="Click to select..."
        icon="calendar-today"
        :date-formatter="formatter"
      />
    </s-field>
  </section>
</template>

<script>
import dateformat from '@/utils/date'
export default {
  data () {
    return {
      showWeekNumber: false
    }
  },
  methods: {
    formatter (date) {
      return dateformat.format(date, 'yyyy-MM-dd')
    }
  }
}
</script>
