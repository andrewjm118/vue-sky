<template>
  <div>
    <s-message type="is-warning">
      <div class="content">
        安装和使用需要<a
          href="https://vuejs.org/"
          target="_blank"
        >Vue.js 2.5+</a>版本。
      </div>
    </s-message>
    <div class="media">
      <div class="media-left">
        <p class="title">
          1
        </p>
      </div>
      <div class="media-content">
        <p class="title">
          NPM or Yarn <em>(推荐)</em>
        </p>
        <p class="subtitle is-spaced">
          使用vue-cli或自己搭建的Webpack或者其他框架，创建项目后
        </p>
        <p class="title is-4">
          安装
        </p>
        <CodeView
          code="npm install vue-sky"
          lang="bash"
          expanded
        />

        <hr>

        <div class="title is-4">
          使用
        </div>
        <CodeView
          title="完整引入 (推荐)"
          :code="importingBundle | pre"
          lang="javascript"
          expanded
        />
        <CodeView
          title="单个组件作为Vue插件"
          :code="importingComponentsAsVuePlugins | pre"
          lang="javascript"
          expanded
        />
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
          浏览器标签引入
        </p>
        <p class="subtitle is-spaced">
          使用CDN或下载文件到本地
        </p>
        <p class="title is-4">
          安装
        </p>

        <CodeView
          title="引入"
          :code="importingScript | pre"
          lang="javascript"
          expanded
        />
        <hr>

        <p class="title is-4">
          使用例子
        </p>
        <CodeView
          :code="importingCDNHtml | pre"
          codepen
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
                import VueSky from 'vue-sky'
                import 'vue-sky/dist/vue-sky.min.css'

                Vue.use(VueSky)
                `,
      importingComponentsAsVuePlugins: `
                import Vue from 'vue'
                import { Table, Input } from 'vue-sky'
                import 'vue-sky/dist/vue-sky.min.css'

                Vue.use(Table)
                Vue.use(Input)
                `,
      importingCDNHtml: `
        <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-sky/dist/vue-sky.min.css">
</head>

<body>
    <div id="app">
      <s-button type="is-primary">Show message</s-button>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/vue"></\script>
    <script src="//cdn.jsdelivr.net/npm/vue-sky/dist/vue-sky.min.js"></\script>

    <script>
    new Vue({
      el: '#app',
    })
    </\script>
</body>
</html>
      `,
      importingScript: `
      <!-- 引入Vue -->
<script src="//cdn.jsdelivr.net/npm/vue"></\script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/vue-sky/dist/vue-sky.min.css">
<!-- 引入组件库 -->
<script src="//cdn.jsdelivr.net/npm/vue-sky/dist/vue-sky.min.js"></\script>
                `
    }
  }
}
</script>
