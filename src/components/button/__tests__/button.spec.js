/*
 * @Description: 请输入....
 * @Author: andrewjm
 * @Date: 2020-05-11 09:53:57
 * @LastEditTime: 2020-05-11 11:32:02
 * @LastEditors: andrewjm
 */

import { shallowMount, mount } from '@vue/test-utils'
import SButton from '../src/button'

let wrapper

// 分组
describe('Button component', () => {
  // 下面的测试都是执行这里
  beforeEach(() => {
    wrapper = shallowMount(SButton)
  })
  // 是否是vue按钮组件
  test('is a Vue instance', () => {
    // 断言
    expect(wrapper.name()).toBe('SButton')
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // 可否渲染
  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  // 测试按钮点击事件
  test('emit a click event', () => {
    // eslint-disable-next-line no-undef
    const click = jest.fn()
    wrapper.vm.$on('click', click)
    wrapper.find('.button').trigger('click')
    expect(click).toHaveBeenCalledTimes(1)
  })

  // 左侧可不可以添加图标
  test('should show icon', () => {
    wrapper = mount(SButton, {
      propsData: {
        iconLeft: 'plus'
      }
    })
    expect(wrapper.contains('.icon')).toBe(true)
  })
})
