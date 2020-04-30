/*
 * @Author: andrewjm
 * @Date: 2019-12-25 09:50:08
 * @LastEditTime: 2020-04-30 13:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \workLog-manager\src\utils\date.js
 * 例子:
 *  console.log(dateformat.format(new Date(), 'yyyy年MM月dd日'))
    console.log(dateformat.isLeapYear(new Date()))
    console.log(dateformat.getDays(currentMonth))
    console.log(dateformat.formatToDate('2019-12-25'))
    console.log(dateformat.getWeek(dateformat.formatToDate('2019-12-21'), 0))
 */

export default function dateformat () {
}

/**
 * 格式化时间
 * @param date
 * @param fmt
 * @returns {*}
 */
dateformat.format = function (date, fmt) {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (!this.isNotEmpty(fmt)) {
    fmt = 'yyyy-MM-dd hh:mm:ss'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

dateformat.formatToDate = function (dateStr) {
  if (this.isNotEmpty(dateStr)) {
    return new Date(Date.parse(dateStr.replace(/-/g, '/')))
  }
  return ''
}

dateformat.getDateStart = function (date) {
  var fmt = 'yyyy-MM-dd'
  var dateStartStr = this.getDateStartStr(date, fmt)
  var startTime = new Date(Date.parse(dateStartStr))
  return startTime
}

dateformat.getDateStartStr = function (date, fmt) {
  if (typeof fmt === 'undefined') {
    fmt = 'yyyy-MM-dd'
  }
  var dateStr = this.format(date, fmt)
  dateStr += ' 00:00:00'
  return dateStr
}

dateformat.getDateEnd = function (date) {
  var fmt = 'yyyy-MM-dd'
  var dateEndStr = this.getDateEndStr(date, fmt)
  var endTime = new Date(Date.parse(dateEndStr))
  return endTime
}

dateformat.getDateEndStr = function (date, fmt) {
  if (typeof fmt === 'undefined') {
    fmt = 'yyyy-MM-dd'
  }
  var endStr = this.format(date, fmt)
  endStr += ' 23:59:59'
  return endStr
}

/* dateformat.compareDate = function(d1, d2) {
  if (d1 && d2) {
    if (d1.getTime() > d2.getTime()) {
      return 1
    } else if (d1.getTime() === d2.getTime()) {
      return 0
    } else if (d1.getTime() < d2.getTime()) {
      return -1
    }
  }
} */
/**
 * @description: 判断日期1是否大于日期2，只到年月日
 * @param {type}
 * @return:
 */
dateformat.compareDate = function (date1, date2) {
  var result = false
  if (date1.getFullYear() > date2.getFullYear()) {
    result = true
  } else if (date1.getFullYear() === date2.getFullYear()) {
    if (date1.getMonth() > date2.getMonth()) {
      result = true
    } else if (date1.getMonth() === date2.getMonth()) {
      if (date1.getDate() > date2.getDate()) {
        result = true
      }
    }
  }
  return result
}

dateformat.isLeapYear = function (date) {
  if (date instanceof Date) {
    return (date.getYear() % 4 === 0 && ((date.getYear() % 100 !== 0) || (date.getYear() % 400 === 0)))
  }
  console.warn('argument format is wrong')
  return false
}

dateformat.isValidDate = function (dateStr) {
  if (this.isNotEmpty(dateStr)) {
    var r = dateStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)
    if (r == null) {
      return false
    }
    var d = new Date(r[1], r[3] - 1, r[4])
    var num = (d.getFullYear() === r[1] && (d.getMonth() + 1) === r[3] && d.getDate() === r[4])
    return (num !== 0)
  }
}

dateformat.addDay = function (date, dayNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(dayNum) && date instanceof Date && typeof dayNum === 'number') {
    date.setDate(date.getDate() + dayNum)
  } else {
    console.warn('date or dayNum format wrong')
  }
  return date
}

dateformat.addDayStr = function (dateStr, dayNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(dayNum) && typeof dayNum === 'number') {
    date = this.formatToDate(dateStr)
    date.setDate(date.getDate() + dayNum)
  } else {
    console.warn('dateStr or dayNum format wrong')
  }
  return date
}

dateformat.addMonth = function (date, monthNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(monthNum) && date instanceof Date && typeof monthNum === 'number') {
    date.setMonth(date.getMonth() + monthNum)
  } else {
    console.warn('date or monthNum format wrong')
  }
  return date
}

dateformat.addMonthStr = function (dateStr, monthNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(monthNum) && typeof monthNum === 'number') {
    date = this.formatToDate(dateStr)
    date.setMonth(date.getMonth() + monthNum)
  } else {
    console.warn('date or monthNum format wrong')
  }
  return date
}

dateformat.addYear = function (date, yearNum) {
  if (this.isNotEmpty(date) && this.isNotEmpty(yearNum) && date instanceof Date && typeof yearNum === 'number') {
    date.setYear(date.getFullYear() + yearNum)
  } else {
    console.warn('date or yearNum format wrong')
  }
  return date
}

dateformat.addYearStr = function (dateStr, yearNum) {
  var date = ''
  if (this.isNotEmpty(dateStr) && this.isNotEmpty(yearNum) && typeof yearNum === 'number') {
    date = this.formatToDate(dateStr)
    date.setYear(date.getFullYear() + yearNum)
  } else {
    console.warn('date or yearNum format wrong')
  }
  return date
}

dateformat.isNotEmpty = function (str) {
  if (str !== '' && str !== null && typeof str !== 'undefined') {
    return true
  }
  console.warn('argument format is wrong')
  return false
}

dateformat.getMonth = function (date) {
  return date.getMonth() + 1
}
/**
 * @description: 返回当前年月份的天数
 * @param {num} 月份
 * @return: 天数
 */
dateformat.getDays = function (month, year) {
  if (typeof year === 'undefined') {
    year = new Date().getFullYear()
  }
  const d = new Date(year, month, 0)
  return d.getDate()
}

dateformat.getWeek = function (date, type) {
  if (date) {
    if (!this.isNotEmpty(type)) {
      type = 0
    }
    var index = date.getDay()
    var dateStr = ''
    switch (type) {
      case this.WEEKTYPE.ZH_DAYNAME:
        dateStr = this._options.ZH.dayNames[index]
        break
      case this.WEEKTYPE.ZH_SDAYNAME:
        dateStr = this._options.ZH.shortDayNames[index]
        break
      case this.WEEKTYPE.US_DAYNAME:
        dateStr = this._options.US.dayNames[index]
        break
      case this.WEEKTYPE.US_SDAYNAME:
        dateStr = this._options.US.shortDayNames[index]
        break
    }
    return dateStr
  }
}

/**
 * @description: 日期字符串转时间戳
 * @param {type}
 * @return:
 */
dateformat.timeStamp = function (date) {
  const currentDate = date.substring(0, 19).replace(/-/g, '/')
  return new Date(currentDate).getTime()
}

dateformat.WEEKTYPE = {
  ZH_DAYNAME: 0,
  ZH_SDAYNAME: 1,
  US_DAYNAME: 2,
  US_SDAYNAME: 3
}

dateformat._options = {
  ZH: {
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    shortDayNames: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    shortMonthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  US: {
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    shortMonthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  }
}
