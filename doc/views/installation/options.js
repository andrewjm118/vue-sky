export default [
  {
    props: [
      {
        name: '<code>defaultIconPack</code>',
        description: `图标用于标签使用或者在组件上使用    —
                    <a href="https://materialdesignicons.com/" target="_blank">Material Design Icons</a> or
                    <a href="http://fontawesome.io/" target="_blank">FontAwesome 4</a> or
                    <a href="https://fontawesome.com/" target="_blank">FontAwesome 5</a>`,
        type: 'String',
        values: '<code>mdi</code>, <code>fa</code>, <code>fas</code>, <code>far</code>, <code>fad</code>',
        default: '<code>mdi</code>'
      },
      {
        name: '<code>defaultIconPrev</code>',
        description: '用于prev的图标,用于Datepicker、分页和步骤等',
        type: 'String',
        values: '—',
        default: '<code>chevron-left</code>'
      },
      {
        name: '<code>defaultIconNext</code>',
        description: '用于next的图标,用于Datepicker、分页和步骤等',
        type: 'String',
        values: '—',
        default: '<code>chevron-right</code>'
      },
      {
        name: '<code>defaultNotificationDuration</code>',
        description: 'notification 通知提醒组件 <code>duration</code> 属性.',
        type: 'Number',
        values: '—',
        default: '<code>2000</code>'
      }
    ]
  }
]
