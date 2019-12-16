<template>
  <section>
    <s-alert
      type="is-success"
      :has-icon="true"
      message="Success Text"
      desc="我是描述信息"
    />
    <s-alert
      type="is-info"
      :closable="false"
      :has-icon="true"
      message="Info Text"
    />
    <s-alert
      type="is-warning"
      :closable="false"
      :has-icon="true"
      message="Warning Text"
    />
    <s-alert
      type="is-danger"
      :closable="false"
      :has-icon="true"
      message="Danger Text"
    />
  </section>
</template>
