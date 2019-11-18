<template>
  <section>
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
  </section>
</template>
