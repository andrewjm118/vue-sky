<template>
  <section>
    <s-alert
      type="is-success"
      :closable="false"
    >
      Success Text
    </s-alert>
    <s-alert
      type="is-info"
      :closable="true"
    >
      Info Text
    </s-alert>
    <s-alert
      type="is-warning"
      :closable="true"
    >
      Warning Text
    </s-alert>
    <s-alert
      type="is-danger"
      :closable="false"
    >
      Danger Text
    </s-alert>
  </section>
</template>
