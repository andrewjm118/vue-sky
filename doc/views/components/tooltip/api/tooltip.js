export default [
  {
    props: [
      {
        name: '<code>type</code>',
        description: 'tooltip风格',
        type: 'String',
        values: `<code>is-white</code>, <code>is-black</code>, <code>is-light</code>,
                    <code>is-dark</code>, <code>is-primary</code>, <code>is-info</code>, <code>is-success</code>,
                    <code>is-warning</code>, <code>is-danger</code>,
                    and any other colors you've set in the <code>$colors</code> list on Sass`,
        default: '<code>is-primary</code>'
      },
      {
        name: '<code>active</code>',
        description: '工具提示是否激活',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>label</code>',
        description: 'Tooltip 提示文本',
        type: 'String',
        values: '—',
        default: '—'
      },
      {
        name: '<code>position</code>',
        description: '提示位置',
        type: 'String',
        values: '<code>is-top</code>, <code>is-bottom</code>, <code>is-left</code>, <code>is-right</code>',
        default: '<code>is-top</code>'
      },
      {
        name: '<code>always</code>',
        description: '工具提示将始终处于活动状态',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>animated</code>',
        description: '工具提示将有一个淡出动画',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>square</code>',
        description: '工具提示将是正方形(不是圆角)',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>dashed</code>',
        description: '工具提示将有一个虚线下划线',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>multilined</code>',
        description: '多行提示框',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>size</code>',
        description: '工具提示多行大小(仅适用于多行工具提示)',
        type: 'String',
        values: '<code>is-small</code>, <code>is-medium</code>, <code>is-large</code>',
        default: '<code>is-medium</code>'
      },
      {
        name: '<code>delay</code>',
        description: '工具显示前延迟(毫秒)',
        type: 'Number',
        values: '—',
        default: '<code>0</code>'
      }
    ]
  }
]
