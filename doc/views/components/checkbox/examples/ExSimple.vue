<template>
  <section>
    <div class="block">
      <s-checkbox>Basic</s-checkbox>
      <s-checkbox v-model="checkbox">
        {{ checkbox }}
      </s-checkbox>
      <s-checkbox
        v-model="checkboxCustom"
        true-value="Yes"
        false-value="No"
      >
        {{ checkboxCustom }}
      </s-checkbox>
      <s-checkbox disabled />
      <s-checkbox
        v-model="checked"
        disabled
      />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false,
      checked: true,
      checkboxCustom: 'Yes'
    }
  }
}
</script>
