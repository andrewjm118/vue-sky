<template>
  <section>
    <div class="columns">
      <div class="column">
        <div class="field">
          <s-switch :value="true">
            Default
          </s-switch>
        </div>
        <div class="field">
          <s-switch
            :value="true"
            type="is-info"
          >
            Info
          </s-switch>
        </div>
        <div class="field">
          <s-switch
            :value="true"
            type="is-success"
          >
            Success
          </s-switch>
        </div>
        <div class="field">
          <s-switch
            :value="true"
            type="is-danger"
          >
            Danger
          </s-switch>
        </div>
        <div class="field">
          <s-switch
            :value="true"
            type="is-warning"
          >
            Warning
          </s-switch>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <s-switch size="is-small">
            Small
          </s-switch>
        </div>
        <div class="field">
          <s-switch>Default</s-switch>
        </div>
        <div class="field">
          <s-switch size="is-medium">
            Medium
          </s-switch>
        </div>
        <div class="field">
          <s-switch size="is-large">
            Large
          </s-switch>
        </div>
      </div>
    </div>
  </section>
</template>
