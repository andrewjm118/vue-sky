/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString (str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray (arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * 空数组
 * @export
 * @param {*} arg
 * @returns
 */
export function isEmptyArray (arg) {
  return isArray(arg) && arg.length === 0
}

/**
 *
 * 判断是否是undefined
 * @export
 * @param {any} v
 * @returns
 */
export function isUndef (v) {
  return v === undefined || v === null
}

/**
 *
 * 判断不是undefined
 * @export
 * @param {*} v
 * @returns
 */
export function isDef (v) {
  return v !== undefined && v !== null
}

/**
 *
 * 是否是对象
 * @export
 * @param {*} obj
 * @returns
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * 是否存在属性
 *
 * @export
 * @param {*} obj
 * @param {*} key
 * @returns
 */
export function hasOwn (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 *  判断是否为bool值
 * @param {*} value
 */
export function isBoolean (value) {
  return value === true || value === false ||
  Object.prototype.toString.call(value) === '[object Boolean]'
}

export function findComponentsDownward (context, componentName, components = []) {
  const childrens = context.$children

  if (childrens.length) {
    childrens.forEach(child => {
      const subChildren = child.$children
      const name = child.$options.name

      if (name === componentName) {
        components.push(child)
      }
      if (subChildren.length) {
        const findChildren = findComponentsDownward(child, componentName, components)
        if (findChildren) {
          components.concat(findChildren)
        }
      }
    })
  }
  return components
}

export function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }

  return parent
}

export function getScroll (target, top) {
  if (typeof window === 'undefined') {
    return 0
  }

  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'
  const isWindow = target === window

  let ret = isWindow ? target[prop] : target[method]
  // ie6,7,8 standard mode
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }

  return ret
}
