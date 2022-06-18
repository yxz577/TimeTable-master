//index.js
//获取应用实例
const { postData } = require("../../utils/data")
var pastData = require("../../utils/data")
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
        {"DayOfWeek": 1, "begin": 1, "duration": 2, "name": "高等数学高等数学高等数学", "location": "B-316"},
        {"DayOfWeek": 1, "begin": 5, "duration": 2, "name": "高等数学", "location": "B-316"},
        {"DayOfWeek": 2, "begin": 3, "duration": 2, "name": "高等数学", "location": "B-316"},
        {"DayOfWeek": 3, "begin": 1, "duration": 2, "name": "高等数学", "location": "B-316"}
    ]
  },

  onLoad: function () {
    console.log('onLoad')
    var login_success = wx.getStorageSync('login_success')
    if (login_success) {
      pastData.getTimeTable()
      pastData.getTermStartDay()
    }
  }
})
