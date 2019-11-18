<template>
  <section>
    <div class="field">
      <s-switch>Default</s-switch>
    </div>
    <div class="field">
      <s-switch v-model="isSwitched">
        {{ isSwitched }}
      </s-switch>
    </div>
    <div class="field">
      <s-switch
        v-model="isSwitchedCustom"
        true-value="Yes"
        false-value="No"
      >
        {{ isSwitchedCustom }}
      </s-switch>
    </div>
    <div class="field">
      <s-switch disabled>
        Disabled
      </s-switch>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isSwitched: false,
      isSwitchedCustom: 'Yes'
    }
  }
}
</script>
