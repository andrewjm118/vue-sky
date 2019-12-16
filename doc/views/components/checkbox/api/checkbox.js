export default [
  {
    title: 'Checkbox',
    props: [
      {
        name: '<code>v-model</code>',
        description: '绑定值',
        type: 'Any',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>native-value</code>',
        description: '原生属性',
        type: 'Any',
        values: '—',
        default: '—'
      },
      {
        name: '<code>indeterminate</code>',
        description: '原生属性 <code>indeterminate</code>',
        type: 'Boolean',
        values: '—',
        default: '—'
      },
      {
        name: '<code>disabled</code>',
        description: '原生属性 <code>disabled</code>',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>required</code>',
        description: '原生属性 <code>required</code>',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>name</code>',
        description: '原生属性 <code>name</code>',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '可选的大小设置',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>type</code>',
        description: '可选的类型设置',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>`,
        default: '—'
      }
    ],
    events: [
      {
        name: '<code>input</code>',
        description: '当复选框的值更改时触发',
        parameters: '<code>value: Boolean</code>'
      }
    ]
  }
]
