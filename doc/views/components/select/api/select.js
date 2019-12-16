export default [
  {
    props: [
      {
        name: '<code>v-model</code>',
        description: '绑定值',
        type: 'Any',
        values: '—',
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '可选设置大小',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>placeholder</code>',
        description: '没有选择时的文本',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>loading</code>',
        description: '添加载入中效果',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>expanded</code>',
        description: '自适应宽度',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>icon</code>',
        description: '添加图标',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>icon-pack</code>',
        description: '引用哪里的图标',
        type: 'String',
        values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>, <code>fal</code>',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>native-size</code>',
        description: '原生 <code>size</code>',
        type: 'Number',
        values: '—',
        default: '<code>4</code>'
      },
      {
        name: '其他原生属性',
        description: '—',
        type: '—',
        values: '—',
        default: '—'
      }
    ]
  }
]
