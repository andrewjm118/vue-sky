<template>
  <section>
    <s-field>
      <s-radio-button
        v-model="radioButton"
        native-value="is-large"
      >
        Large
      </s-radio-button>

      <s-radio-button
        v-model="radioButton"
        native-value=""
      >
        Default
      </s-radio-button>
      <s-radio-button
        v-model="radioButton"
        native-value="is-medium"
      >
        Medium
      </s-radio-button>
      <s-radio-button
        v-model="radioButton"
        native-value="is-small"
      >
        Small
      </s-radio-button>
    </s-field>
    <p class="content is-3">
      <s-button
        type="is-primary"
        :size="radioButton"
      >
        Primary
      </s-button>
      <s-button
        type="is-light"
        :size="radioButton"
      >
        Light
      </s-button>
      <s-button
        type="is-dark"
        :size="radioButton"
      >
        Dark
      </s-button>
    </p>
    <p class="content">
      <s-button
        type="is-primary"
        icon-left="download"
        :size="radioButton"
      >
        Download
      </s-button>
      <s-button
        type="is-primary"
        icon-left="download"
        :size="radioButton"
      />
      <s-button
        type="is-primary"
        icon-right="download"
        :size="radioButton"
      >
        Download
      </s-button>
    </p>
    <p class="content">
      <s-button
        type="is-primary"
        icon-left="chevron-left"
        :size="radioButton"
      >
        Backward
      </s-button>
      <s-button
        type="is-primary"
        icon-right="chevron-right"
        :size="radioButton"
      >
        Forward
      </s-button>
    </p>
  </section>
</template>

<script>
export default {
  data () {
    return {
      radioButton: ''
    }
  }
}
</script>
