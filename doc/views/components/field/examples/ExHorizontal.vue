<template>
  <section>
    <s-field
      horizontal
      label="Subject"
      type="is-danger"
      message="Please enter a subject"
    >
      <s-input
        name="subject"
        expanded
      />
    </s-field>

    <s-field
      horizontal
      label="From"
    >
      <s-input
        name="name"
        placeholder="Name"
        expanded
      />
      <s-input
        name="email"
        type="email"
        placeholder="nobody@nowhere.com"
        expanded
      />
    </s-field>

    <s-field
      horizontal
      label="Topic"
    >
      <s-select placeholder="Select a topic">
        <option value="1">
          Bulma
        </option>
        <option value="2">
          Vue.js
        </option>
        <option value="3">
          Buefy
        </option>
      </s-select>
    </s-field>

    <s-field
      horizontal
      label="Message"
    >
      <s-input type="textarea" />
    </s-field>

    <s-field horizontal>
      <!-- Label left empty for spacing -->
      <p class="control">
        <button class="button is-primary">
          Send message
        </button>
      </p>
    </s-field>
  </section>
</template>
