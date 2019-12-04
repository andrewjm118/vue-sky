export default [
  {
    props: [
      {
        name: '<code>type</code>',
        description: '控件的类型(颜色)，可选',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>,
                     以及你在Scss的$colors列表中设置的任何其他颜色`,
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '按钮的大小尺寸，可选',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>loading</code>',
        description: '按钮添加加载状态',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>rounded</code>',
        description: '圆形的风格',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>outlined</code>',
        description: '轮廓边框风格',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>icon-left</code>',
        description: '图标放在左边',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>icon-right</code>',
        description: '图标放在右边',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>icon-pack</code>',
        description: '图标库来自哪里',
        type: 'String',
        values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>native-type</code>',
        description: '按钮的原生类型',
        type: 'String',
        values: 'Any native button type',
        default: '<code>button</code>'
      },
      {
        name: '<code>tag</code>',
        description: '按钮类型',
        type: 'String',
        values: '<code>button</code>, <code>a</code>, <code>input</code>, <code>router-link</code>',
        default: '<code>button</code>'
      },
      {
        name: '其他原生属性',
        description: '—',
        type: '—',
        values: '—',
        default: '—'
      }
    ],
    events: [
      {
        name: '<code>click</code>',
        description: '点击事件',
        parameters: '<code>event: $event</code>'
      }
    ]
  }
]
