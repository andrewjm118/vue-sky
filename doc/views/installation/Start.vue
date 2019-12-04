<template>
  <div>
    <p class="title">
      特性
    </p>

    <div class="content">
      <ul>
        <li>
          基于 Vue 开发的 UI 组件
        </li>
        <li>
          使用 npm + webpack4.0 + babel 的工作流，支持 ES2015
        </li>
        <li>
          样式基于Bulma框架(Flexbox based)，布局简单、响应式、可定制化
        </li>
        <li>
          全面、灵活且强大的ui组件，API友好
        </li>
      </ul>
    </div>
    <hr>
    <p class="title">
      浏览器支持
    </p>

    <div class="content">
      <ul>
        <li>
          现代浏览器和 IE9 及以上
        </li>
      </ul>
    </div>
    <hr>
    <p class="title">
      版本
    </p>

    <div class="content">
      <div class="tags has-addons">
        <span />
        <span class="tag is-success">npm package</span>
        <span class="tag is-info">1.0.0</span>
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
