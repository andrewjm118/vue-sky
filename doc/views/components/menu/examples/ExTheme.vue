<template>
  <sidebar-menu
    :menu="menu"
    :relative="true"
    :collapsed="collapsed"
    :theme="selectedTheme"
    :show-one-child="true"
  />
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
  components: {
    SidebarMenu
  },
  data () {
    return {
      menu: [
        {
          header: true,
          title: '分组1',
          hiddenOnCollapse: true
        },
        {
          title: '导航一',
          icon: 'fa fa-download'
        },
        {
          title: '导航二',
          icon: 'fa fa-code'
        },
        {
          header: true,
          title: '分组2',
          hiddenOnCollapse: true
        },
        {
          title: '导航三',
          icon: 'fa fa-cogs'
        }
      ],
      selectedTheme: 'white-theme',
      collapsed: false
    }
  }
}
</script>

<style>

</style>
