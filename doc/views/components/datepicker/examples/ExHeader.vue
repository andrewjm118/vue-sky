<template>
  <s-field label="Select a date">
    <s-datepicker
      :focused-date="date"
      :first-day-of-week="1"
      placeholder="Click to select..."
    >
      <template slot="header">
        <s-field>
          <s-autocomplete
            v-model="month"
            open-on-focus
            readonly
            :data="months"
            field="name"
            @select="selectMonth"
          />
          <p class="control">
            <span class="button is-static">{{ date.getFullYear() }}</span>
          </p>
        </s-field>
      </template>
    </s-datepicker>
  </s-field>
</template>

<script>
export default {
  data () {
    return {
      date: new Date(),
      month: null,
      months: [
        { name: 'January', value: 0 },
        { name: 'February', value: 1 },
        { name: 'March', value: 2 },
        { name: 'April', value: 3 },
        { name: 'May', value: 4 },
        { name: 'June', value: 5 },
        { name: 'July', value: 6 },
        { name: 'August', value: 7 },
        { name: 'September', value: 8 },
        { name: 'October', value: 9 },
        { name: 'November', value: 10 },
        { name: 'December', value: 11 }
      ]
    }
  },
  mounted () {
    this.month = this.months.filter((item) =>
      item.value === this.date.getMonth()
    )[0].name
  },
  methods: {
    selectMonth (option) {
      if (option) {
        this.date = new Date(this.date)
        this.date.setMonth(option.value)
      }
    }
  }
}
</script>
