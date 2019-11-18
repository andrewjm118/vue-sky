<template>
  <section>
    <s-field label="Simple">
      <s-select placeholder="Select a name">
        <option
          v-for="option in data"
          :key="option.id"
          :value="option.id"
        >
          {{ option.user.first_name }}
        </option>
      </s-select>
    </s-field>

    <s-field label="Grouped">
      <s-select
        placeholder="Select a character"
        icon="account"
      >
        <optgroup label="Black Sails">
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
        </optgroup>

        <optgroup label="Breaking Bad">
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
        </optgroup>

        <optgroup label="Game of Thrones">
          <option value="tyrion-lannister">
            Tyrion Lannister
          </option>
          <option value="jamie-lannister">
            Jamie Lannister
          </option>
          <option value="daenerys-targaryen">
            Daenerys Targaryen
          </option>
          <option value="jon-snow">
            Jon Snow
          </option>
        </optgroup>
      </s-select>
    </s-field>

    <s-field
      label="Error"
      type="is-danger"
      message="Something went wrong with this field"
    >
      <s-select placeholder="Select a character">
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field label="Rounded">
      <s-select
        placeholder="Select a character"
        rounded
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field label="Required">
      <s-select
        placeholder="Select a character"
        required
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field label="Loading">
      <s-select
        placeholder="Select a character"
        loading
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field label="Disabled">
      <s-select
        placeholder="Select a character"
        disabled
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field label="Disabled option">
      <s-select placeholder="Select a character">
        <option value="flint">
          Flint
        </option>
        <option
          value="silver"
          disabled
        >
          Silver
        </option>
      </s-select>
    </s-field>

    <s-field
      label="Expanded"
    >
      <s-select
        placeholder="Select a character"
        expanded
      >
        <option value="flint">
          Flint
        </option>
        <option value="silver">
          Silver
        </option>
      </s-select>
    </s-field>
  </section>
</template>

<script>
const data = require('@/data/sample.json')

export default {
  data () {
    return { data }
  }
}
</script>
