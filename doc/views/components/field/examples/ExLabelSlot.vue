<template>
  <section>
    <s-field
      custom-class="is-medium"
      horizontal
    >
      <template slot="label">
        With tooltip
        <s-tooltip
          type="is-dark"
          label="Help text here for explanation"
        >
          <s-icon
            size="is-small"
            icon="help-circle-outline"
          />
        </s-tooltip>
      </template>
      <s-input size="is-medium" />
    </s-field>

    <s-field>
      <template slot="label">
        Label with custom <span class="has-text-primary is-italic">style</span>
      </template>
      <s-input />
    </s-field>
  </section>
</template>
