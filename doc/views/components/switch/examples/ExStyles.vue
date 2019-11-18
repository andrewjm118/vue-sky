<template>
  <section>
    <s-field grouped>
      <s-switch v-model="isRounded">
        Rounded
      </s-switch>
      <s-switch v-model="isOutlined">
        Outlined
      </s-switch>
    </s-field>
    <s-field grouped>
      <s-field label="Type">
        <b-select
          v-model="type"
          placeholder="Type"
        >
          <option value="null">
            Default
          </option>
          <option value="is-primary">
            Primary
          </option>
          <option value="is-success">
            Success
          </option>
          <option value="is-warning">
            Warning
          </option>
          <option value="is-danger">
            Danger
          </option>
        </b-select>
      </s-field>
      <s-field label="Size">
        <b-select v-model="size">
          <option value="">
            Default
          </option>
          <option value="is-small">
            is-small
          </option>
          <option value="is-medium">
            is-medium
          </option>
          <option value="is-large">
            is-large
          </option>
        </b-select>
      </s-field>
    </s-field>
    <s-switch
      :rounded="isRounded"
      :outlined="isOutlined"
      :size="size"
      :type="type"
    >
      Sample
    </s-switch>
  </section>
</template>

<script>
export default {
  data () {
    return {
      size: '',
      type: null,
      isRounded: false,
      isOutlined: false
    }
  }
}
</script>
