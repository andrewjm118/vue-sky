<template>
  <section>
    <p class="content">
      <b>selected</b>: {{ selectedOptions }}
    </p>
    <s-field>
      <s-select
        v-model="selectedOptions"
        multiple
        native-size="8"
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
        <option value="vane">
          Vane
        </option>
        <option value="billy">
          Billy
        </option>
        <option value="jack">
          Jack
        </option>
        <option value="heisenberg">
          Heisenberg
        </option>
        <option value="jesse">
          Jesse
        </option>
        <option value="saul">
          Saul
        </option>
        <option value="mike">
          Mike
        </option>
      </s-select>
    </s-field>
  </section>
</template>

<script>
export default {
  data () {
    return {
      selectedOptions: []
    }
  }
}
</script>
