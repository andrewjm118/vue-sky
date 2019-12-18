export default [
  {
    props: [
      {
        name: '<code>type</code>',
        description: '可选弹出框样式',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>`,
        default: '—'
      },
      {
        name: '<code>active</code>',
        description: '无论通知是否激活，使用<code>.sync</code>修饰符，使其双向绑定',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>closable</code>',
        description: '关闭按钮',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>auto-close</code>',
        description: '是否自动关闭',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>duration</code>',
        description: '显示时长',
        type: 'Number',
        values: '—',
        default: '<code>2000</code>'
      },
      {
        name: '<code>icon-pack</code>',
        description: '引用图标类型',
        type: 'String',
        values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>has-icon</code>',
        description: '根据<code>type</code>在左侧添加一个图标',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>message</code>',
        description: '消息文字',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>position</code>',
        description: '通知显示位置',
        type: 'String',
        values: '<code>is-top-right</code>, <code>is-top</code>, <code>is-top-left</code>, <code>is-bottom-right</code>, <code>is-bottom</code>, <code>is-bottom-left</code>',
        default: '<code>is-bottom-right</code>'
      },
      {
        name: '<code>queue</code>',
        description: '多个通知信息排队显示',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>indefinite</code>',
        description: '一直显示通知信息，除非程序停止它',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>container</code>',
        description: '容器',
        type: 'String',
        values: '—',
        default: '<code>body</code>'
      }
    ],
    events: [
      {
        name: '<code>close</code>',
        description: '关闭提示框事件',
        parameters: '—'
      }
    ]
  }
]
