export default [
  {
    title: 'Dropdown',
    props: [
      {
        name: '<code>v-model</code>',
        description: '绑定值',
        type: 'Any',
        values: '—',
        default: '<code>null</code>'
      },
      {
        name: '<code>hoverable</code>',
        description: '下拉菜单将由鼠标悬停而不是点击来触发',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>position</code>',
        description: '可选，下拉菜单相对于触发的位置',
        type: 'String',
        values: '<code>is-top-right</code>, <code>is-top-left</code>, <code>is-bottom-left</code>',
        default: 'Bottom right'
      },
      {
        name: '<code>disabled</code>',
        description: '禁用 dropdown',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>animation</code>',
        description: '自定义动画 (transition name)',
        type: 'String',
        values: '—',
        default: '<code>fade</code>'
      },
      {
        name: '<code>inline</code>',
        description: '下拉式内容(项目)以内联方式显示，删除触发器',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>mobile-modal</code>',
        description: '移动设备上显示模式',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>multiple</code>',
        description: '允许多选',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>can-close</code>',
        description: '可以通过按esc或单击外部来关闭下拉菜单吗',
        type: 'Boolean, Array',
        values: '<code>escape</code>, <code>outside</code>',
        default: '<code>true</code>'
      }
    ],
    slots: [
      {
        name: 'default',
        description: '',
        props: ''
      },
      {
        name: '<code>trigger</code>',
        description: '触发下拉菜单的内容',
        props: '—'
      }
    ],
    events: [
      {
        name: '<code>change</code>',
        description: '当一个项被选中时触发',
        parameters: '<code>value: String</code>'
      },
      {
        name: '<code>active-change</code>',
        description: '下拉菜单激活或停用时触发',
        parameters: '<code>active: Boolean</code>'
      }
    ],
    methods: [
      {
        name: '<code>toggle</code>',
        description: '切换激活'
      }
    ]
  },
  {
    title: 'Item',
    props: [
      {
        name: '<code>value</code>',
        description: '当前值',
        type: 'Any',
        values: '—',
        default: '<code>null</code>'
      },
      {
        name: '<code>separator</code>',
        description: '设置项目分割线',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>disabled</code>',
        description: '禁用项',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>focusable</code>',
        description: '可以被聚焦',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>custom</code>',
        description: '不是可点击项',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>has-link</code>',
        description: '有链接',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>paddingless</code>',
        description: '删除填充',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      }
    ],
    events: [
      {
        name: '<code>click</code>',
        description: '点击事件',
        parameters: '—'
      }
    ]
  }
]
