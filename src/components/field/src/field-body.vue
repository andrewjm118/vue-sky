<script>
export default {
  name: 'SFieldBody',
  props: {
    message: String,
    type: [String, Object]
  },
  render (createElement) {
    return createElement('div', { attrs: { class: 'field-body' } }, this.$slots.default.map((element) => {
      if (!element.tag) {
        return element
      }
      if (this.message) {
        return createElement('s-field', { attrs: { message: this.message, type: this.type } }, [element])
      }
      return createElement('s-field', { attrs: { type: this.type } }, [element])
    }))
  }
}
</script>
