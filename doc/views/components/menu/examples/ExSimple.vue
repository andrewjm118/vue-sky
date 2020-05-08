<template>
  <sidebar-menu
    :menu="menu"
    :relative="true"
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
          title: '标题',
          hiddenOnCollapse: true
        },
        {
          href: '#',
          title: '导航一',
          icon: 'fa fa-user',
          child: [
            {
              href: '#',
              title: '子选项'
            }
          ]
        },
        {
          href: '#',
          title: '导航二',
          icon: 'fa fa-chart-area',
          child: [
            {
              href: '#',
              title: '子选项'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
