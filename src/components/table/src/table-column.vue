<template>
  <td
    v-if="visible"
    :class="rootClasses"
    :data-label="label"
  >
    <slot />
  </td>
</template>

<script>
export default {
  name: 'STableColumn',
  props: {
    label: String,
    customKey: [String, Number],
    field: String,
    meta: [String, Number, Boolean, Function, Object, Array],
    width: [Number, String],
    numeric: Boolean,
    centered: Boolean,
    sortable: Boolean,
    visible: {
      type: Boolean,
      default: true
    },
    customSort: Function,
    internal: Boolean // Used internally by Table
  },
  data () {
    return {
      newKey: this.customKey || this.label
    }
  },
  computed: {
    rootClasses () {
      return {
        'has-text-right': this.numeric && !this.centered,
        'has-text-centered': this.centered
      }
    }
  },
  beforeMount () {
    this.addRefToTable()
  },
  beforeUpdate () {
    this.addRefToTable()
  },
  beforeDestroy () {
    const index = this.$parent.newColumns.map(
      (column) => column.newKey).indexOf(this.newKey)
    if (index >= 0) {
      this.$parent.newColumns.splice(index, 1)
    }
  },
  methods: {
    addRefToTable () {
      if (!this.$parent.$data._isTable) {
        this.$destroy()
        throw new Error('You should wrap bTableColumn on a bTable')
      }

      if (this.internal) return

      // Since we're using scoped prop the columns gonna be multiplied,
      // this finds when to stop based on the newKey property.
      const repeated = this.$parent.newColumns.some(
        (column) => column.newKey === this.newKey)
      !repeated && this.$parent.newColumns.push(this)
    }
  }
}
</script>
