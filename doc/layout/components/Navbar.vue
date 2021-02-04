<template>
  <nav
    class="navbar docs-navbar is-spaced has-shadow"
    :class="{ 'is-primary is-transparent': light }"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
          title="vue-sky: lightweight UI components for Vue.js based on Bulma"
          active-class=""
        >
          <img
            v-if="light"
            src="@/assets/images/logo.png"
            alt="vue-sky"
          >
          <img
            v-else
            src="@/assets/images/logo.png"
            alt="vue-sky"
          >
          <span style="margin-left: 10px;color: #4A4A4A;font-weight: bold;font-size: 16px;">vue-sky</span>
        </router-link>

        <span
          class="navbar-burger burger"
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive"
        >
          <span />
          <span />
          <span />
        </span>
      </div>

      <div
        class="navbar-menu"
        :class="{ 'is-active': isMenuActive }"
      >
        <div class="navbar-end">
          <!-- <router-link
            to="/"
            exact
            class="navbar-item"
          >
            blog
          </router-link> -->

          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              生态系统
            </div>

            <div class="navbar-dropdown is-boxed">
              <!-- <strong class="navbar-item is-version">
                <span class="has-text-primary">Buefy version</span>
                <span class="has-text-grey">{{ version }}</span>
              </strong> -->
              <strong class="navbar-item is-version">
                <span class="has-text-bulma">Bulma version</span>
                <span class="has-text-grey">{{ bulmaVersion }}</span>
              </strong>

              <hr class="navbar-divider">
              <a
                class="navbar-item"
                href="https://github.com/jgthms/bulma"
                target="_blank"
              >
                Changelogs
              </a>
            </div>
          </div>

          <div class="navbar-item">
            <!-- <a
              class="button is-outlined"
              :class="light ? 'is-light' : 'is-twitter'"
              @click="tweet"
            > -->
            <a
              class="button is-outlined"
              href="https://github.com/andrewjm118/vue-sky"
              target="_blank"
            >
              <s-icon icon="github-circle" />
              <span>github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import buefyPackage from '../../../package'
import bulmaPackage from 'bulma/package'

export default {
  props: {
    light: Boolean
  },
  data () {
    return {
      isMenuActive: false,
      version: buefyPackage.version,
      bulmaVersion: bulmaPackage.version
    }
  },
  mounted () {
    this.$eventHub.$on('navigate', this.closeMenu)
  },
  methods: {
    tweet () {
      const width = 575
      const height = 400
      const left = (window.screen.width - width) / 2
      const top = (window.screen.height - height) / 2
      const url = `https://twitter.com/share?url=${encodeURIComponent(document.location.protocol + '//' + document.location.host)}&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa, @walter_tommasi`
      const opts = `status=1,width=${width},height=${height},top=${top},left=${left}`

      window.open(url, '', opts)
    },
    closeMenu () {
      this.isMenuActive = false
    },
    toggleHtmlClip () {
      document
        .documentElement
        .classList
        .toggle('is-clipped-touch', this.isMenuActive)
    }
  }
}
</script>
