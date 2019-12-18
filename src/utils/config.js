let config = {
  defaultIconPack: 'mdi', // 默认显示图标
  defaultIconComponent: null,
  defaultIconPrev: 'chevron-left',
  defaultIconNext: 'chevron-right',
  customIconPacks: null,
  defaultInputHasCounter: true,
  defaultInputAutocomplete: 'on',
  defaultUseHtml5Validation: true,
  defaultFieldLabelPosition: null,
  defaultTooltipType: 'is-primary',
  defaultTooltipAnimated: false,
  defaultTooltipDelay: 0,
  defaultContainerElement: null,
  defaultNoticeQueue: true,
  defaultNotificationDuration: 2000

}

export default config

export const setOptions = (options) => {
  config = options
}
