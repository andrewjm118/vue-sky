export default [
  {
    props: [
      {
        name: '<code>type</code>',
        description: '可选类型设置',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
        default: '—'
      },
      {
        name: '<code>v-model</code>',
        description: '绑定值',
        type: 'Any',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>native-value</code>',
        description: '原生 <code>value</code>',
        type: 'Any',
        values: '—',
        default: '—'
      },
      {
        name: '<code>true-value</code>',
        description: '当它被选中时，覆盖返回的值',
        type: 'Any',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>false-value</code>',
        description: '在未选中时重写返回值',
        type: 'Any',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>disabled</code>',
        description: '原生 <code>disabled</code>',
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
        description: '可选设置大小',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '—'
      },
      {
        name: '<code>rounded</code>',
        description: '圆角风格',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>outlined</code>',
        description: '边框风格',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      }
    ]
  }
]
