const isObject = (item) => typeof item === 'object' && !Array.isArray(item)
const mergeFn = (target, source) => {
  const isDeep = (prop) =>
    isObject(source[prop]) && target.hasOwnProperty(prop) && isObject(target[prop])
  const replaced = Object.getOwnPropertyNames(source)
    .map((prop) =>
      ({ [prop]: isDeep(prop) ? mergeFn(target[prop], source[prop]) : source[prop] }))
    .reduce((a, b) => ({ ...a, ...b }), {})

  return {
    ...target,
    ...replaced
  }
}
export const merge = mergeFn

/**
 * 删除元素
 *
 * @export
 * @param {*} el
 */
export function removeElement (el) {
  if (typeof el.remove !== 'undefined') {
    el.remove()
  } else if (typeof el.parentNode !== 'undefined') {
    el.parentNode.removeChild(el)
  }
}

/**
 * 获取对象属性、路径的值，即使它是嵌套的
 */
export function getValueByPath (obj, path) {
  const value = path.split('.').reduce((o, i) => o[i], obj)
  return value
}

/**
* 扩展indexOf 方法
*/
export function indexOf (array, obj, fn) {
  if (!array) return -1

  if (!fn || typeof fn !== 'function') return array.indexOf(obj)

  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], obj)) {
      return i
    }
  }

  return -1
}

export const isMobile = {
  Android: function () {
    return (
      typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Android/i)
    )
  },
  BlackBerry: function () {
    return (
      typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/BlackBerry/i)
    )
  },
  iOS: function () {
    return (
      typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/iPhone|iPad|iPod/i)
    )
  },
  Opera: function () {
    return (
      typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/Opera Mini/i)
    )
  },
  Windows: function () {
    return (
      typeof window !== 'undefined' &&
            window.navigator.userAgent.match(/IEMobile/i)
    )
  },
  any: function () {
    return (
      isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
    )
  }
}
