<template>
  <section>
    <s-field>
      <s-input placeholder="提示文字" />
    </s-field>

    <s-field label="Rounded">
      <s-input
        placeholder="提示文字"
        rounded
      />
    </s-field>

    <s-field
      label="Success"
      type="is-success"
    >
      <s-input placeholder="Success" />
    </s-field>

    <s-field
      label="Error"
      type="is-danger"
      message="写一些提示消息"
    >
      <s-input placeholder="Error" />
    </s-field>

    <s-field
      label="Info"
      type="is-info"
    >
      <s-input placeholder="Info" />
    </s-field>

    <s-field
      label="Warning"
      type="is-warning"
    >
      <s-input placeholder="Warning" />
    </s-field>

    <s-field label="Disabled">
      <s-input
        placeholder="Disabled"
        disabled
      />
    </s-field>

    <s-field label="Loading">
      <s-input
        placeholder="Loading"
        loading
      />
    </s-field>
  </section>
</template>
