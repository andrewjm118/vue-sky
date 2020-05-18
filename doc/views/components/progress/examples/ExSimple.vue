<template>
  <section>
    <s-progress
      :percent="45"
      type="primary"
    />
    <s-progress
      :percent="30"
      type="info"
    />
    <s-progress
      :percent="50"
      type="success"
    />
    <s-progress
      :percent="60"
      type="danger"
    />
    <s-progress
      :percent="65"
      type="warning"
    />
  </section>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
