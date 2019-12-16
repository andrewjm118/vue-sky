<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="field">
          <s-checkbox size="is-small">
            Small
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox>Default</s-checkbox>
        </div>
        <div class="field">
          <s-checkbox size="is-medium">
            Medium
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox size="is-large">
            Large
          </s-checkbox>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <s-checkbox :value="true">
            Default
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox
            :value="true"
            type="is-info"
          >
            Info
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox
            :value="true"
            type="is-success"
          >
            Success
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox
            :value="true"
            type="is-danger"
          >
            Danger
          </s-checkbox>
        </div>
        <div class="field">
          <s-checkbox
            :value="true"
            type="is-warning"
          >
            Warning
          </s-checkbox>
        </div>
      </div>
    </div>
  </section>
</template>
