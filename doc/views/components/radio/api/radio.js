export default [
  {
    title: 'Radio',
    props: [
      {
        name: '<code>v-model</code>',
        description: '绑定值',
        type: 'Any',
        values: '—',
        default: '—'
      },
      {
        name: '<code>native-value</code>',
        description: '原生 <code>value</code>',
        type: 'Any',
        values: '—',
        default: '—'
      },
      {
        name: '<code>disabled</code>',
        description: '原生 <code>disabled</code>',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>required</code>',
        description: '原生 <code>required</code>',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>name</code>',
        description: '原生 <code>name</code>',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>size</code>',
        description: '可选大小设置',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>type</code>',
        description: '可选样式类型',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>`,
        default: '—'
      }
    ]
    /* events: [
      {
        name: '<code>input</code>',
        description: 'Triggers when the value of checkbox is changed',
        parameters: '<code>value: Boolean</code>'
      },
      {
        name: '<code>[any].native</code>',
        description: 'Listen to any event using this syntax, e.g <code>click.native</code>',
        parameters: '<code>event: $event</code>'
      }
    ] */
  }
]
