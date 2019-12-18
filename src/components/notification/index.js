import Vue from 'vue'
import Notification from './src/notification'
import NotificationNotice from './src/notificationNotice'

import config from '../../utils/config'

const NotificationProgrammatic = {
  open (params) {
    let message
    let parent
    if (typeof params === 'string') message = params

    const defaultParam = {
      message,
      position: config.defaultNotificationPosition || 'is-top-right'
    }
    if (params.parent) {
      parent = params.parent
      delete params.parent
    }
    const propsData = Object.assign(defaultParam, typeof params === 'string' ? {} : params)

    const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : Vue
    const NotificationNoticeComponent = vm.extend(NotificationNotice)
    return new NotificationNoticeComponent({
      parent,
      el: document.createElement('div'),
      propsData
    })
  }
}

Notification.install = function (Vue) {
  Vue.component(Notification.name, Notification)
}

export {
  Notification,
  NotificationProgrammatic
}
