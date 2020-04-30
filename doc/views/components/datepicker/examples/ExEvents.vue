<template>
  <span>
    <s-field>
      <s-switch v-model="bars">Bars</s-switch>
    </s-field>
    <s-datepicker
      v-model="date"
      inline
      :events="events"
      :indicators="indicators"
    />
  </span>
</template>

<script>
const thisMonth = new Date().getMonth()

export default {
  data () {
    return {
      date: new Date(2017, thisMonth, 1),
      events: [
        new Date(2017, thisMonth, 2),
        new Date(2017, thisMonth, 6),
        {
          date: new Date(2017, thisMonth, 6),
          type: 'is-info'
        },
        {
          date: new Date(2017, thisMonth, 8),
          type: 'is-danger'
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: 'is-success'
        },
        {
          date: new Date(2017, thisMonth, 10),
          type: 'is-link'
        },
        new Date(2017, thisMonth, 12),
        {
          date: new Date(2017, thisMonth, 12),
          type: 'is-warning'
        },
        {
          date: new Date(2017, thisMonth, 16),
          type: 'is-danger'
        },
        new Date(2017, thisMonth, 20),
        {
          date: new Date(2017, thisMonth, 29),
          type: 'is-success'
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: 'is-warning'
        },
        {
          date: new Date(2017, thisMonth, 29),
          type: 'is-info'
        }
      ],
      bars: false
    }
  },
  computed: {
    indicators () {
      return this.bars ? 'bars' : 'dots'
    }
  }
}
</script>
