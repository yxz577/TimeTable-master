// index.js
// pages/recipe/recipelist/recipelist.js
var util = require("../../utils/time-util")
var pastData = require("../../utils/data");
Page({
 
  /**
   * 页面的初始数据
   * selectWeek 0代表的本周  1代表下一周  -1代表上一周   
   * timeBean 传递给组件的数据，数据的格式在一开始的工具类中明确
   */
  data: {
    selectWeek: 0,
    week: 0,
    timeBean: {},
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: {
      type: Array,
      value: []
    },
    termStartDay: ''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timeTable = wx.getStorageSync('timetable')
    var termStartDay = wx.getStorageSync('term_start_data')
    var startDay = new Date(termStartDay);
    var delta = new Date() - startDay
    delta = parseInt(delta / 1000 / 60 / 60 / 24 / 7) 
    this.setData({
      wlist: timeTable,
      week: delta
    });
  },
    
  /**
   * 点击了上一周，选择周数字减一，然后直接调用工具类中一个方法获取到数据
   */
  lastWeek:function(e){   
    var selectWeek = --this.data.selectWeek;
    var week = --this.data.week;
    var timeBean = this.data.timeBean
    timeBean = util.getWeekDayList(selectWeek)
 
    if (selectWeek != 0) {
      timeBean.selectDay = 0;
    }
 
    this.setData({
      timeBean,
      selectWeek,
      week
    })
  },
 
  /**
   * 点击了下一周，选择周数字加一，然后直接调用工具类中一个方法获取到数据
   */
  nextWeek:function(e){
    var selectWeek = ++this.data.selectWeek;
    var week = ++this.data.week;
    var timeBean = this.data.timeBean
    timeBean = util.getWeekDayList(selectWeek)
 
    if (selectWeek != 0){
      timeBean.selectDay = 0;
    }
 
    this.setData({
      timeBean,
      selectWeek,
      week
    })
  },
 
  /**
   * 选中了某一日，改变selectDay为选中日
   */ 
  dayClick:function(e){
    var timeBean = this.data.timeBean
    timeBean.selectDay = e.detail;
    this.setData({
      timeBean,
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      timeBean: util.getWeekDayList(this.data.selectWeek)
    })
    console.log(this.data.timeBean);
  },
 
 
})