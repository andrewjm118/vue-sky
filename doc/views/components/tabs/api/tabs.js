export default [
  {
    title: 'Tabs',
    props: [
      {
        name: '<code>v-model</code>',
        description: '绑定值tab的索引',
        type: 'Number',
        values: '—',
        default: '<code>0</code>'
      },
      {
        name: '<code>expanded</code>',
        description: '自适应宽度',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>animated</code>',
        description: '切换动画效果',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>type</code>',
        description: '可选tab切换样式',
        type: 'String',
        values: '<code>is-boxed</code>, <code>is-toggle</code>',
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '可选tab大小',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>position</code>',
        description: '可选tab位置',
        type: 'String',
        values: '<code>is-centered</code>, <code>is-right</code>',
        default: '—'
      },
      {
        name: '<code>destroy-on-hide</code>',
        description: '销毁隐藏的tabitem',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      }
    ],
    events: [
      {
        name: '<code>change</code>',
        description: '更改活动选项卡时触发',
        parameters: '<code>index: Number</code>'
      }
    ]
  },
  {
    title: 'Tab Item',
    props: [
      {
        name: '<code>label</code>',
        description: 'Tab名称',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>icon</code>',
        description: '图标名称',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>icon-pack</code>',
        description: '哪种图标',
        type: 'String',
        values: '—',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>disabled</code>',
        description: '禁用项',
        type: 'Boolean',
        values: '-',
        default: 'false'
      },
      {
        name: '<code>visible</code>',
        description: '启用项',
        type: 'Boolean',
        values: '-',
        default: 'true'
      }
    ],
    slots: [
      {
        name: 'default',
        description: 'tab内容',
        props: '—'
      },
      {
        name: '<code>header</code>',
        description: 'tab头部',
        props: '—'
      }
    ]
  }
]
