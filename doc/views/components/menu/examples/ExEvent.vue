<template>
  <sidebar-menu
    :menu="menu"
    :relative="true"
    :collapsed="collapsed"
    :theme="selectedTheme"
    :show-one-child="true"
    @toggle-collapse="onToggleCollapse"
    @item-click="onItemClick"
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
          icon: 'fa fa-download',
          child: [
            {
              href: '#',
              title: '子选项'
            }
          ]
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
      selectedTheme: 'Default theme',
      collapsed: false
    }
  },
  methods: {
    onToggleCollapse (collapsed) {
      this.$notify.open({
        message: collapsed ? '菜单收起' : '菜单展开',
        type: 'is-success',
        queue: false
      })
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
    }
  }
}
</script>

<style>

</style>
