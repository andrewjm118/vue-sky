export default [
  {
    props: [
      {
        name: '<code>type</code>',
        description: '可选提示类型',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                      <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                      <code>is-warning</code>, <code>is-danger</code>`,
        default: '—'
      },
      {
        name: '<code>closable</code>',
        description: '添加关闭按钮',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>icon-pack</code>',
        description: '引用图标',
        type: 'String',
        values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>has-icon</code>',
        description: '根据类型在左侧添加一个图标',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>message</code>',
        description: '消息',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>desc</code>',
        description: '描述信息',
        type: 'String',
        values: '—',
        default: '—'
      }
    ],
    events: [
      {
        name: '<code>close</code>',
        description: '关闭事件',
        parameters: '—'
      }
    ]
  }
]
