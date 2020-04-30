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
  defaultNotificationDuration: 2000,
  defaultDatepickerMobileNative: true,
  defaultTimepickerMobileNative: true,
  defaultTaginputHasCounter: true,
  defaultDropdownMobileModal: true,
  defaultDatepickerYearsRange: [-100, 3],
  defaultDatepickerNearbyMonthDays: true,
  defaultDatepickerNearbySelectableMonthDays: false,
  defaultDatepickerShowWeekNumber: false,
  defaultMonthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  defaultDayNames: [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
  ]
}

export default config

export const setOptions = (options) => {
  config = options
}
