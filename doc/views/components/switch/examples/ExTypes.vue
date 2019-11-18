<template>
  <section>
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
  </section>
</template>
