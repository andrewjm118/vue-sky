export default [
  {
    props: [
      {
        name: '<code>active</code>',
        description: '无论是否激活了，都可以使用<code>.sync</code>修饰符进行双向绑定',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>animation</code>',
        description: '自定义动画 (transition name) ',
        type: 'String',
        values: '—',
        default: '<code>fade</code>'
      },
      {
        name: '<code>is-full-page</code>',
        description: '加载程序将覆盖整个页面',
        type: 'Boolean',
        values: '—',
        default: '<code>true</code>'
      },
      {
        name: '<code>can-cancel</code>',
        description: '可以关闭加载按下esc或点击外面',
        type: 'Boolean',
        values: '—',
        default: '<code>false</code>'
      },
      {
        name: '<code>on-cancel</code>',
        description: '用户取消后调用的回调函数(按esc / 单击外面)',
        type: 'Function',
        values: '—',
        default: '—'
      }
    ],
    events: [
      {
        name: '<code>close</code>',
        description: '当用户以编程方式关闭/取消或调用时触发',
        parameters: '—'
      }
    ]
  }
]
