// index.js
// pages/recipe/recipelist/recipelist.js
var util = require("../../utils/time-util")
var pastData = require("../../utils/data")
Page({
 
  /**
   * 页面的初始数据
   * selectWeek 0代表的本周  1代表下一周  -1代表上一周   
   * timeBean 传递给组件的数据，数据的格式在一开始的工具类中明确
   */
  data: {
    selectWeek:0,
    week:0,
    timeBean:{},
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: {
        type:Array,
        value:[]
    }
    // [
    //     [
    //     {"DayOfWeek": 1, "begin": 1, "duration": 2, "name": "高等数学高等数学高等数学", "location": "B-316"},
    //     {"DayOfWeek": 1, "begin": 5, "duration": 2, "name": "高等数学", "location": "B-316"}
    //     ],
    //     [
    //     {"DayOfWeek": 2, "begin": 3, "duration": 2, "name": "高等数学", "location": "B-316"},
    //     {"DayOfWeek": 3, "begin": 1, "duration": 2, "name": "高等数学", "location": "B-316"}
    //     ]
    // ]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        wlist:pastData.postData
    });
    console.log(this.data.wlist[0]);
    // var that = this;
    // console.log("util.request");
    // wx.request({
    //   url: '../../utils/courses.json',
    //   header:{
    //       'content-type':'application/json'
    //   },
    //   success:function(res){
    //       console.log(res.data)
    //       that.setData({
    //           //wlist:res.data.result[0]
    //       })
    //   }
    // });
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