<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <!-- offset="50" -->
      <s-affix :offset="50">
        <s-scrollbar
          class="main-scrollbar"
          @resize="mainScrollbarResize"
        >
          <template v-for="(items, i) in data">
            <p
              :key="items.category"
              class="sidebar-label"
            >
              {{ items.category }}
            </p>
            <ul :key="i">
              <li
                v-for="item in normalizedData(items.pages)"
                :key="item.title"
              >
                <router-link
                  v-if="item.title"
                  :to="item.path"
                >
                  <span class="sidebar-menu-text">{{ item.title }}</span>
                </router-link>

                <!-- submenu -->
                <template v-else>
                  <p>{{ item.category }}</p>
                  <ul>
                    <li
                      v-for="subItem in normalizedData(item.pages)"
                      :key="subItem.title"
                    >
                      <router-link :to="subItem.path">
                        <span class="sidebar-menu-text">{{ subItem.title }}</span>
                      </router-link>
                    </li>
                  </ul>
                </template>
              </li>
            </ul>
          </template>
        </s-scrollbar>
      </s-affix>
    </div>
  </aside>
</template>

<script>
import routes from '@/data/routes'

export default {
  props: {
    data: Array
  },
  methods: {
    mainScrollbarResize () {
      // console.log('mainScrollbarResize')
    },
    normalizedData (items) {
      return items.map((item) => {
        return typeof item === 'string'
          ? routes[item]
          : item
      })
    },
    backToTop () {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
