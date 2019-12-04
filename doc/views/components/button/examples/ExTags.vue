<template>
  <section>
    <div class="buttons">
      <s-button>Button</s-button>

      <s-button
        tag="a"
        href="#"
        target="_blank"
        type="is-link"
      >
        Anchor
      </s-button>

      <s-button
        tag="input"
        native-type="submit"
        value="Submit input"
      />

      <s-button
        tag="router-link"
        to="/"
        type="is-link"
      >
        Router
      </s-button>
    </div>
  </section>
</template>
