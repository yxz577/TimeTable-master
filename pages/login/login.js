// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: "",
    result: -1
  },

  accountInput(e) {
    this.setData({
      account: e.detail.value
    })
  },

  pwdInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  /**
   * form 表单 保存、重置操作
   */
  loginTest() {
    console.log("test-login!")
    console.log(this.data.account)
    console.log(this.data.password)
    var that = this

    wx.request({
      //请求接口的地址
      url: "http://dcac.top:5000/test-login",
      data: {
        username: this.data.account,
        password: this.data.password,
      },
      header: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        console.log(res.data);
        that.setData({code: res.data.code})
        // term_begin_day = new Date(res.data["data"])
      },
      fail: function (err) {console.log(err);}, //请求失败
      complete: function () {} //请求完成后执行的函数
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})