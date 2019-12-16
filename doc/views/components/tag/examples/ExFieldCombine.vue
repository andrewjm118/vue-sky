<template>
  <section>
    <s-field
      grouped
      group-multiline
    >
      <div class="control">
        <s-tag-list attached>
          <s-tag type="is-dark">
            npm
          </s-tag>
          <s-tag type="is-info">
            0.5.1
          </s-tag>
        </s-tag-list>
      </div>

      <div class="control">
        <s-tag-list attached>
          <s-tag type="is-dark">
            downloads
          </s-tag>
          <s-tag type="is-success">
            15k
          </s-tag>
        </s-tag-list>
      </div>

      <div class="control">
        <s-tag-list attached>
          <s-tag type="is-dark">
            chat
          </s-tag>
          <s-tag type="is-primary">
            on discord
          </s-tag>
        </s-tag-list>
      </div>
    </s-field>
    <br>

    <s-field
      grouped
      group-multiline
    >
      <div class="control">
        <s-tag
          type="is-primary"
          attached
          aria-close-label="Close tag"
          closable
        >
          Technology
        </s-tag>
      </div>

      <div class="control">
        <s-tag
          type="is-primary"
          attached
          aria-close-label="Close tag"
          closable
        >
          Vuejs
        </s-tag>
      </div>

      <div class="control">
        <s-tag
          type="is-primary"
          attached
          aria-close-label="Close tag"
          closable
        >
          CSS
        </s-tag>
      </div>

      <div class="control">
        <s-tag
          type="is-primary"
          attached
          aria-close-label="Close tag"
          closable
        >
          Flexbox
        </s-tag>
      </div>
    </s-field>
  </section>
</template>
