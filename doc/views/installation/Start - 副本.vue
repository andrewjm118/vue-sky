<template>
  <div>
    <p class="title">
      Icons
    </p>
    <p class="subtitle">
      Several components uses icons, you might want to add a pack
    </p>
    <CodeView
      title="Material Design Icons CDN"
      :code="materialIcons"
      expanded
    />
    <CodeView
      title="Font Awesome 5 CDN"
      :code="fontAwesome5"
      expanded
    />
    <div class="content">
      <blockquote>
        <p>Refer to its documentation for latest release / CDN.</p>
        <p>Please note that Buefy doesn't include icon packs. You have to import it as you prefer (NPM, CDN, etc.).</p>
        <p>
          If you opted for Font Awesome, you should update your
          <router-link to="/documentation/constructor-options">
            constructor options
          </router-link>.
        </p>
      </blockquote>
    </div>

    <hr>

    <div class="media">
      <div class="media-left">
        <p class="title">
          1
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          NPM or Yarn <em>(recommended)</em>
        </p>
        <p class="subtitle is-spaced">
          After creating a project with vue-cli or custom-made (usually Webpack)
        </p>
        <p class="title is-4">
          Installation
        </p>
        <CodeView
          code="npm install buefy"
          lang="bash"
          expanded
        />

        <hr>

        <div class="title is-4">
          Usage
        </div>
        <!-- <s-message type="is-success">
          <div class="content">
            Even though this is gonna import <strong>ALL</strong> components to your application,
            Buefy full bundle is optimized and still pretty small:
            <ul>
              <li><strong>script</strong> is <strong>32KB</strong> min+gzip</li>
              <li><strong>style</strong> is <strong>28KB</strong> min+gzip (with bulma included)</li>
            </ul>
          </div>
        </s-message> -->
        <CodeView
          title="Full bundle (recommended)"
          :code="importingBundle | pre"
          lang="javascript"
          expanded
        />
        <CodeView
          title="Individual components as Vue plugins"
          :code="importingComponentsAsVuePlugins | pre"
          lang="javascript"
          expanded
        />
        <!-- <s-message type="is-info">
          To include individual styles, see <router-link to="/documentation/customization">
            Customization
          </router-link> section.
        </s-message> -->
      </div>
    </div>

    <div class="media">
      <div class="media-left">
        <p class="title">
          2
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          Standalone
        </p>
        <p class="subtitle is-spaced">
          Using CDN or downloading files to serve local
        </p>
        <p class="title is-4">
          Installation
        </p>
        <div class="content">
          <p>Just download or use these as CDN:</p>
          <ul>
            <li>
              Script: <a
                href="https://unpkg.com/buefy/dist/buefy.min.js"
                target="_blank"
              >https://unpkg.com/buefy/dist/buefy.min.js</a>
            </li>
            <li>
              Style: <a
                href="https://unpkg.com/buefy/dist/buefy.min.css"
                target="_blank"
              >https://unpkg.com/buefy/dist/buefy.min.css</a>
            </li>
          </ul>
        </div>

        <hr>

        <p class="title is-4">
          Usage example
        </p>
        <CodeView
          :code="importingCDNHtml | pre"
          expanded
        />
      </div>
    </div>

    <hr>

    <div class="media">
      <div class="media-left">
        <p class="title">
          3
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          Nuxt.js
        </p>
        <p class="subtitle is-spaced">
          Using a Nuxt.js module to keep things easier
        </p>
        <p class="title is-4">
          Installation
        </p>
        <CodeView
          code="npm install nuxt-buefy"
          lang="bash"
          expanded
        />

        <p class="title is-4">
          Usage
        </p>
        <p class="content">
          Add <a href="https://github.com/buefy/nuxt-buefy">nuxt-buefy</a> to modules section of <code>nuxt.config.js</code>:
        </p>
        <CodeView
          :code="importingNuxtBuefy | pre"
          lang="javascript"
          expanded
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      importingBundle: `
                import Vue from 'vue'
                import Buefy from 'buefy'
                import 'buefy/dist/buefy.css'

                Vue.use(Buefy)
                `,
      importingComponentsAsVuePlugins: `
                import Vue from 'vue'
                import { Table, Input } from 'buefy'
                import 'buefy/dist/buefy.css'

                Vue.use(Table)
                Vue.use(Input)
                `,
      importingSSR: `
                import Vue from 'vue'
                import Buefy from 'buefy'
                import 'buefy/dist/buefy.css'

                Vue.use(Buefy) `,
      installNuxtBuefy: `
                // with npm
                npm install nuxt-buefy

                // with yarn
                yarn add nuxt-buefy
                `,
      importingNuxtBuefy: `
                {
                    modules: [
                        // Simple usage
                        'nuxt-buefy',

                        // Or you can customize
                        ['nuxt-buefy', { css: false, materialDesignIcons: false }],
                    ]
                }`,
      importingCDNHtml: 'importingCDNHtml demo',
      materialIcons: '<link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">',
      fontAwesome5: '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'
    }
  }
}
</script>
