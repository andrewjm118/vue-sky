<template>
  <section>
    <div class="field">
      <s-checkbox>Basic</s-checkbox>
    </div>
    <div class="field">
      <s-checkbox v-model="checkbox">
        {{ checkbox }}
      </s-checkbox>
    </div>
    <div class="field">
      <s-checkbox
        v-model="checkboxCustom"
        true-value="Yes"
        false-value="No"
      >
        {{ checkboxCustom }}
      </s-checkbox>
    </div>
    <div class="field">
      <s-checkbox :indeterminate="true">
        Indeterminate111
      </s-checkbox>
    </div>
    <div class="field">
      <s-checkbox disabled>
        Disabled
      </s-checkbox>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      checkbox: false,
      checkboxCustom: 'Yes'
    }
  }
}
</script>
