<template>
  <section>
    <div class="block">
      <s-field
        grouped
        group-multiline
      >
        <div class="control">
          <s-switch v-model="animated">
            Animated
          </s-switch>
        </div>
      </s-field>
    </div>

    <s-skeleton
      width="20%"
      :animated="animated"
    />

    <s-skeleton
      width="40%"
      :animated="animated"
    />

    <s-skeleton
      width="80%"
      :animated="animated"
    />

    <s-skeleton :animated="animated" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      animated: true
    }
  }
}
</script>
