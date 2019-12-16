export default [
  {
    title: 'Tag',
    props: [
      {
        name: '<code>type</code>',
        description: '可选tab样式',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>`,
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '可选tab大小',
        type: 'String',
        values: '<code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>rounded</code>',
        description: 'tab圆角',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>closable</code>',
        description: '带关闭按钮',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>attached</code>',
        description: '连接多个tag标签',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>ellipsis</code>',
        description: '添加省略号以使文本不溢出',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>disabled</code>',
        description: '禁用',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      }
    ],
    events: [
      {
        name: '<code>close</code>',
        description: '关闭按钮触发事件',
        parameters: '—'
      }
    ]
  },
  {
    title: 'Taglist',
    props: [
      {
        name: '<code>attached</code>',
        description: '多个tag连接在一起',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      }
    ]
  }
]
