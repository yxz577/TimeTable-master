var localdata={
    getTimeTable(e) {
      console.log("get time table!")
      var that = this
      wx.showLoading({
        title: 'loading',
      })
      wx.request({
        //请求接口的地址
        url: "http://dcac.top:5000/timetable",
        data: {
          username: wx.getStorageSync("username"),
          password: wx.getStorageSync("password"),
        },
        header: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          console.log(res.data)
          wx.hideLoading();
          if(res.data.code != 0){
            wx.showModal({
              title:'失败',
              content:'账号或密码错误！',
              showCancel:false,
            })
          } else {
            wx.setStorageSync('timetable', res.data.data)
          }
        },
        fail: function (err) { //请求失败
          console.log(err);
          wx.hideLoading();
          wx.showModal({
            title: '失败',
            content:'网络错误！'
          })
        },
        complete: function () {wx.hideLoading();} //请求完成后执行的函数
      })
    },

    getTermStartDay(e) {
      console.log("get term-start-day!")
      var that = this
      wx.showLoading({
        title: 'loading',
      })
      wx.request({
        //请求接口的地址
        url: "http://dcac.top:5000/term-start-day",
        data: {
          username: wx.getStorageSync("username"),
          password: wx.getStorageSync("password"),
        },
        header: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        method: "POST",
        success: function (res) {
          if(res.data.code != 0){
            wx.showModal({
              title:'失败',
              content:'账号或密码错误！',
              showCancel:false,
            })
          } else {
            wx.setStorageSync('term_start_data', res.data.data)
          }
        },
        fail: function (err) { //请求失败
          console.log(err);
          wx.showModal({
            title: '失败',
            content:'网络错误！'
          })
        },
        complete: function () {wx.hideLoading();} //请求完成后执行的函数
      })
    },
}

module.exports = {
    postData: localdata.list,
    getTimeTable: localdata.getTimeTable,
    getTermStartDay: localdata.getTermStartDay
}