<template>
  <main>
    <Navbar />

    <section class="documentation">
      <div
        v-if="!meta.hideSidebar"
        class="sidebar-bg"
      />

      <div class="container is-fullhd docs-template-horizontal">
        <Sidebar
          v-if="!meta.hideSidebar"
          :data="menu"
        />
        <div class="docs-main">
          <div class="docs-main-container">
            <Header v-bind="meta" />
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import menuData from '@/data/menu'

export default {
  components: {
    Header,
    Navbar,
    Sidebar
  },
  data () {
    return {
      menu: [],
      meta: {}
    }
  },
  mounted () {
    this.$eventHub.$on('navigate', this.setMeta)
    this.setMeta(this.$router.currentRoute.meta)
    if (this.$route.hash) {
      this.$nextTick(() => this.scrollTo(this.$route.hash))
    }
  },
  methods: {
    setMeta (meta) {
      console.log(99, meta)
      this.meta = meta
      this.menu = menuData[this.meta.menu]
    },
    scrollTo (hash) {
      location.href = hash
    }
  }
}
</script>
